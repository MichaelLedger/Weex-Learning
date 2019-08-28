//
//  WXAVPlayerModule.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXAVPlayerModule.h"

@implementation WXAVPlayerModule

/*
 Xcode4时，@property只能生成getter、setter方法的声明；
 
 从Xcode5开始，@property 可以自动生成_propertyName成员变量和getter、setter方法的声明和实现。
 默认情况下，getter、setter方法作用于_propertyName变量。
 
 但是，当同时重写getter和setter两个方法的时候，实现了完全的自定义实现，无法对应到默认的变量_propertyName，_propertyName就无效了，
 需要手动定义一个变量或者使用@synthesize指定一个变量来绑定到属性上。
 */
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(play:))
WX_EXPORT_METHOD(@selector(pause))

#pragma mark - WXAudioPlayerProtocol
- (void)play:(NSString *)audioUrl {
    if (_player) {//已初始化
        AVURLAsset *urlAsset = (AVURLAsset *)_player.currentItem.asset;
        NSString *currentAudioUrl = urlAsset.URL.absoluteString;
        if (![currentAudioUrl isEqualToString:audioUrl]) {//切换曲目
            [self removeObservers];
            
            AVPlayerItem *songItem = [[AVPlayerItem alloc] initWithURL:[NSURL URLWithString:audioUrl]];
            [songItem addObserver:self forKeyPath:@"status" options:NSKeyValueObservingOptionNew context:nil];
            [songItem addObserver:self forKeyPath:@"loadedTimeRanges" options:NSKeyValueObservingOptionNew context:nil];
            
            [_player replaceCurrentItemWithPlayerItem:songItem];
            
            //回调原生播放组件刷新进度条
            float total = CMTimeGetSeconds(self.player.currentItem.duration);
            NSString *playDuration = [NSString stringWithFormat:@"%.2f",total];
            NSDictionary *params =@{@"progress" : @"0",
                                    @"current" : @"0",
                                    @"total" : playDuration
                                    };
            if (self.callback) {
                self.callback(params);
            }
            
            [self addObservesrs];
        } else {//继续播放
            float current = CMTimeGetSeconds(self.player.currentItem.currentTime);
            float total = CMTimeGetSeconds(self.player.currentItem.duration);
            if (fabs(current - total) < 1) {//已播放完毕则重新播放
                [_player seekToTime:CMTimeMakeWithSeconds(0, NSEC_PER_SEC) toleranceBefore:CMTimeMake(1, 1000) toleranceAfter:CMTimeMake(1, 1000)];
            }
        }
    } else {//未初始化
        AVPlayerItem * songItem = [[AVPlayerItem alloc]initWithURL:[NSURL URLWithString:audioUrl]];
        [songItem addObserver:self forKeyPath:@"status" options:NSKeyValueObservingOptionNew context:nil];
        [songItem addObserver:self forKeyPath:@"loadedTimeRanges" options:NSKeyValueObservingOptionNew context:nil];
        
        AVPlayer * player = [[AVPlayer alloc] initWithPlayerItem:songItem];
        _player = player;
        
        [self addObservesrs];
    }
    
    //开始播放
    [_player play];
}

- (void)pause {
    [_player pause];
}

#pragma mark - Private Methods
- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *)context {
    AVPlayerItem * songItem = object;
    if ([keyPath isEqualToString:@"status"]) {
        switch (self.player.status) {
            case AVPlayerStatusReadyToPlay:
            {
                NSLog(@"KVO：准备完毕，可以播放");
                //回调原生播放组件刷新进度条
                float total = CMTimeGetSeconds(self.player.currentItem.duration);
                NSString *playDuration = [NSString stringWithFormat:@"%.2f",total];
                NSDictionary *params =@{@"progress" : @"0",
                                        @"current" : @"0",
                                        @"total" : playDuration
                                        };
                if (self.callback) {
                    self.callback(params);
                }
            }
            break;
            case AVPlayerStatusFailed:
                NSLog(@"KVO：加载失败，网络或者服务器出现问题");
            break;
            default:
                NSLog(@"KVO：未知状态，此时不能播放");
            break;
        }
    } else if ([keyPath isEqualToString:@"loadedTimeRanges"]) {
        NSArray * array = songItem.loadedTimeRanges;
        CMTimeRange timeRange = [array.firstObject CMTimeRangeValue]; //本次缓冲的时间范围
        NSTimeInterval totalBuffer = CMTimeGetSeconds(timeRange.start) + CMTimeGetSeconds(timeRange.duration); //缓冲总长度
        NSLog(@"共缓冲%.2f秒",totalBuffer);
    }
}

- (void)playbackFinished:(NSNotification *)notice {
    NSLog(@"播放完成");
    // 通知weex播放完毕,自动播放下一首
    AVURLAsset *urlAsset = (AVURLAsset *)_player.currentItem.asset;
    NSString *currentAudioUrl = urlAsset.URL.absoluteString;
    [self.weexInstance fireGlobalEvent:@"auidoPlayerFinished"
                                params:@{@"audioUrl" : currentAudioUrl}];
}

- (void)removeObservers {
    [_player.currentItem removeObserver:self forKeyPath:@"status"];
    [_player.currentItem removeObserver:self forKeyPath:@"loadedTimeRanges"];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:AVPlayerItemDidPlayToEndTimeNotification object:nil];
    [_player removeTimeObserver:_progressObserver];
    _progressObserver = nil;
}

- (void)addObservesrs {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(playbackFinished:) name:AVPlayerItemDidPlayToEndTimeNotification object:self.player.currentItem];
    
    // 监听播放进度
    __weak __typeof(self) weakSelf = self;
    id progressObserver = [self.player addPeriodicTimeObserverForInterval:CMTimeMake(1.0, 1.0) queue:dispatch_get_main_queue() usingBlock:^(CMTime time) {
        float current = CMTimeGetSeconds(time);
        float total = CMTimeGetSeconds(weakSelf.player.currentItem.duration);
        if (current) {
            float progress = current / total;
            NSString *playTime = [NSString stringWithFormat:@"%.f",current];
            NSString *playDuration = [NSString stringWithFormat:@"%.2f",total];
//            NSLog(@"%f, %@ s, %@ s", progress, playTime, playDuration);
            
            // 通知weex刷新进度条
            [weakSelf.weexInstance fireGlobalEvent:@"playing"
                                            params:@{@"progress" : [NSString stringWithFormat:@"%.2f", progress],
                                                     @"current" : playTime,
                                                     @"total" : playDuration
                                                     }];
            
            //回调原生播放组件刷新进度条
            NSDictionary *params =@{@"progress" : [NSString stringWithFormat:@"%.2f", progress],
                                    @"current" : playTime,
                                    @"total" : playDuration
                                    };
            if (weakSelf.callback) {
                weakSelf.callback(params);
            }
        }
    }];
    _progressObserver = progressObserver;
}

@end
