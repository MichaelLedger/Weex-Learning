//
//  WXAudioPlayer.h
//  WeexDev
//
//  Created by MountainX on 2019/8/26.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import <WeexSDK/WeexSDK.h>

NS_ASSUME_NONNULL_BEGIN

@interface WXAudioPlayer : WXComponent

@end

@interface WXAudioPlayerView : UIView

@property (nonatomic, strong) UILabel *startTimeLabel;
@property (nonatomic, strong) UILabel *endTimeLabel;
@property (nonatomic, strong) UISlider *timeSlider;

@end

NS_ASSUME_NONNULL_END
