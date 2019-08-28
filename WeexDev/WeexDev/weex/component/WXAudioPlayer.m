//
//  WXAudioPlayer.m
//  WeexDev
//
//  Created by MountainX on 2019/8/26.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXAudioPlayer.h"

#define RGBHEX(hex) [UIColor colorWithRed:((float)((hex & 0xFF0000) >> 16)) / 255.0 green:((float)((hex & 0xFF00) >> 8)) / 255.0 blue:((float)(hex & 0xFF)) / 255.0 alpha:1]
#define RGBHEXA(hex,a) [UIColor colorWithRed:((float)(((hex) & 0xFF0000) >> 16))/255.0 green:((float)(((hex) & 0xFF00)>>8))/255.0 blue: ((float)((hex) & 0xFF))/255.0 alpha:(a)]

@implementation WXAudioPlayer

WX_EXPORT_METHOD(@selector(play:))
WX_EXPORT_METHOD(@selector(pause))

- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        _playerModule = [WXAVPlayerModule new];
        _playerModule.weexInstance = weexInstance;//weex实例传递
        __weak __typeof(self) weakSelf = self;
        _playerModule.callback = ^(NSDictionary *params) {
            WXAudioPlayerView *player = (WXAudioPlayerView *)weakSelf.view;
            [player refreshSlider:params];
        };
    }
    return self;
}

- (UIView *)loadView {
    WXAudioPlayerView *playerView = [WXAudioPlayerView new];
    __weak __typeof(self) weakSelf = self;
    playerView.callback = ^(float value) {
        WXAudioPlayerView *player = (WXAudioPlayerView *)weakSelf.view;
        [weakSelf.playerModule.player seekToTime:CMTimeMakeWithSeconds(player.timeSlider.value, NSEC_PER_SEC) toleranceBefore:CMTimeMake(1, 1000) toleranceAfter:CMTimeMake(1, 1000) completionHandler:^(BOOL finished) {
            player.isDragging = NO;//跳转完毕后才根据播放进度刷新进度条
            [weakSelf.playerModule.player play];//拖拽进度条后自动开始播放
        }];
    };
    return playerView;
}

#pragma mark - WXAudioPlayerProtocol
- (void)play:(NSString *)audioUrl {
    [_playerModule play:audioUrl];
}

- (void)pause {
    [_playerModule pause];
}

@end

@implementation WXAudioPlayerView

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        [self setup];
    }
    return self;
}

- (void)setup {
    _startTimeLabel = [UILabel new];
    _startTimeLabel.translatesAutoresizingMaskIntoConstraints = NO;
    _startTimeLabel.text = @"00:00";
    _startTimeLabel.textColor = RGBHEX(0x333333);
    _startTimeLabel.font = [UIFont systemFontOfSize:14];
    [self addSubview:_startTimeLabel];
    
    _timeSlider = [UISlider new];
    _timeSlider.translatesAutoresizingMaskIntoConstraints = NO;
    _timeSlider.maximumValue = 0;
    _timeSlider.minimumValue = 0;
    [_timeSlider setMinimumTrackTintColor:RGBHEXA(0x999999, 1)];
    [_timeSlider setMaximumTrackTintColor:RGBHEXA(0x999999, 0.5)];
    [_timeSlider setThumbImage:[UIImage imageNamed:@"icon_read_progress"] forState:UIControlStateNormal];
    [self addSubview:_timeSlider];
    [_timeSlider addTarget:self action:@selector(sliderChanging:) forControlEvents:UIControlEventValueChanged];
    [_timeSlider addTarget:self action:@selector(sliderChanged:) forControlEvents:UIControlEventTouchUpInside];
    
    _endTimeLabel = [UILabel new];
    _endTimeLabel.translatesAutoresizingMaskIntoConstraints = NO;
    _endTimeLabel.text = @"00:00";
    _endTimeLabel.textColor = RGBHEX(0x333333);
    _endTimeLabel.font = [UIFont systemFontOfSize:14];
    [self addSubview:_endTimeLabel];
    
    NSDictionary *views = @{@"startTimeLabel" : _startTimeLabel,
                            @"timeSlider" : _timeSlider,
                            @"endTimeLabel" : _endTimeLabel
                            };
    NSArray<__kindof NSLayoutConstraint *> *startTimeLabelVerticalConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|-0-[startTimeLabel]-0-|" options:0 metrics:nil views:views];
    NSArray<__kindof NSLayoutConstraint *> *timeSliderVerticalConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|-0-[timeSlider]-0-|" options:0 metrics:nil views:views];
    NSArray<__kindof NSLayoutConstraint *> *endTimeLabelVerticalConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|-0-[endTimeLabel]-0-|" options:0 metrics:nil views:views];
    [self addConstraints:startTimeLabelVerticalConstraints];
    [self addConstraints:timeSliderVerticalConstraints];
    [self addConstraints:endTimeLabelVerticalConstraints];
    
    NSArray<__kindof NSLayoutConstraint *> *horizontalConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"H:|-bigmargin-[startTimeLabel]-margin-[timeSlider]-margin-[endTimeLabel]-bigmargin-|" options:0 metrics:@{@"bigmargin" : @(18), @"margin" : @(7)} views:views];
    [self addConstraints:horizontalConstraints];
}

- (void)sliderChanging:(UISlider *)slider {
    _isDragging = YES;
    [self refreshSlider];
}

- (void)refreshSlider {
    NSInteger seconds = [[NSString stringWithFormat:@"%f", _timeSlider.value] integerValue];
    if (seconds >= 3600) {
        _startTimeLabel.text = [NSString stringWithFormat:@"%02ld:%02ld:%02ld", seconds/3600,seconds%3600/60, seconds%60];
    } else {
        _startTimeLabel.text = [NSString stringWithFormat:@"%02ld:%02ld", seconds/60, seconds%60];
    }
    NSInteger duration = [[NSString stringWithFormat:@"%f", _timeSlider.maximumValue] integerValue];
    if (duration >= 3600) {
        _endTimeLabel.text = [NSString stringWithFormat:@"%02ld:%02ld:%02ld", duration/3600,duration%3600/60, duration%60];
    } else {
        _endTimeLabel.text = [NSString stringWithFormat:@"%02ld:%02ld", duration/60, duration%60];
    }
}

- (void)refreshSlider:(NSDictionary *)params {
    _timeSlider.maximumValue = [params[@"total"] floatValue];
    if (!_isDragging) {
        _timeSlider.value = [params[@"current"] floatValue];
    }
    [self refreshSlider];
}

- (void)sliderChanged:(UISlider *)slider {
    NSLog(@"%f", slider.value);
    if (self.callback) {
        self.callback(slider.value);
    }
}


@end
