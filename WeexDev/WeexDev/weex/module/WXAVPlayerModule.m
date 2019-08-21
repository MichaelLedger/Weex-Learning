//
//  WXAVPlayerModule.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXAVPlayerModule.h"

@implementation WXAVPlayerModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(play:))
WX_EXPORT_METHOD(@selector(pause))
WX_EXPORT_METHOD(@selector(resume))

#pragma mark - WXAudioPlayerProtocol
- (void)play:(NSString *)audioUrl {
    if (_progressObserver) {
        [_player removeTimeObserver:_progressObserver];
        _progressObserver = nil;
    }
    if (_player) {
        [_player pause];
        _player = nil;
    }
    
    NSURL *url  = [NSURL URLWithString:audioUrl];
    AVPlayerItem * songItem = [[AVPlayerItem alloc]initWithURL:url];
    [songItem addObserver:self forKeyPath:@"status" options:NSKeyValueObservingOptionNew context:nil];
    [songItem addObserver:self forKeyPath:@"loadedTimeRanges" options:NSKeyValueObservingOptionNew context:nil];
    
    AVPlayer * player = [[AVPlayer alloc] initWithPlayerItem:songItem];
    _player = player;
    [_player play];
    
    // 监听播放进度
    __weak __typeof(self) weakSelf = self;
    id progressObserver = [self.player addPeriodicTimeObserverForInterval:CMTimeMake(1.0, 1.0) queue:dispatch_get_main_queue() usingBlock:^(CMTime time) {
        float current = CMTimeGetSeconds(time);
        float total = CMTimeGetSeconds(songItem.duration);
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
        }
    }];
    _progressObserver = progressObserver;
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(playbackFinished:) name:AVPlayerItemDidPlayToEndTimeNotification object:songItem];
}

- (void)pause {
    [_player pause];
}

- (void)resume {
    [_player play];
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *)context {
    AVPlayerItem * songItem = object;
    if ([keyPath isEqualToString:@"status"]) {
        switch (self.player.status) {
            case AVPlayerStatusReadyToPlay:
                NSLog(@"KVO：准备完毕，可以播放");
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
}

@end
