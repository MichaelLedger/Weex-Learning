//
//  WXAVPlayerModule.h
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "WXAudioPlayerProtocol.h"
#import <AVFoundation/AVFoundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface WXAVPlayerModule : NSObject <WXAudioPlayerProtocol>

@property (nonatomic, strong) AVPlayer *player;
@property (nonatomic, strong) id progressObserver;

@end

NS_ASSUME_NONNULL_END
