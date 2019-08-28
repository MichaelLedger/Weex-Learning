//
//  WXAudioPlayer.h
//  WeexDev
//
//  Created by MountainX on 2019/8/26.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import <WeexSDK/WeexSDK.h>
#import "WXAudioPlayerProtocol.h"
#import "WXAVPlayerModule.h"

NS_ASSUME_NONNULL_BEGIN

@interface WXAudioPlayer : WXComponent <WXAudioPlayerProtocol>

@property (nonatomic, strong) WXAVPlayerModule *playerModule;

@end

@interface WXAudioPlayerView : UIView

typedef void(^WXAudioPlayerViewCallBack)(float value);

@property (nonatomic, strong) UILabel *startTimeLabel;
@property (nonatomic, strong) UILabel *endTimeLabel;
@property (nonatomic, strong) UISlider *timeSlider;

@property (nonatomic, copy) WXAudioPlayerViewCallBack callback;

@property (nonatomic, assign) BOOL isDragging;

- (void)refreshSlider:(NSDictionary *)params;

@end

NS_ASSUME_NONNULL_END
