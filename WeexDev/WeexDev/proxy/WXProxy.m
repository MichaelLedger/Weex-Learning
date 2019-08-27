//
//  WXProxy.m
//  WeexDev
//
//  Created by MountainX on 2019/8/27.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXProxy.h"
#import <WeexSDK/WeexSDK.h>
#import "WXBanner.h"
#import "WXImgLoaderDefaultImpl.h"
#import "WXDebugModule.h"
#import "WXAudioPlayerProtocol.h"
#import "WXAVPlayerModule.h"
#import "WXAudioPlayer.h"
#import "WXUserModule.h"

@implementation WXProxy

+ (void)registerWeex {
//    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^{
    // App configuration
    [WXAppConfiguration setAppGroup:@"Your app group"];
    [WXAppConfiguration setAppName:@"Your app name"];
    [WXAppConfiguration setAppVersion:@"Your app version"];
    
    //Initialize WeexSDK
    [WXSDKEngine initSDKEnvironment];
    
    //Register custom modules and components, optional.
    [WXSDKEngine registerComponent:@"banner" withClass:[WXBanner class]];
    [WXSDKEngine registerComponent:@"audio-player" withClass:[WXAudioPlayer class]];
    [WXSDKEngine registerModule:@"debug" withClass:[WXDebugModule class]];
    [WXSDKEngine registerModule:@"audio" withClass:[WXAVPlayerModule class]];
    [WXSDKEngine registerModule:@"user" withClass:[WXUserModule class]];

    //Register the implementation of protocol, optional.
    //    [WXSDKEngine registerHandler:[WXAppNavigationImpl new] withProtocol:@protocol(WXNavigationProtocol)];
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    
    //Set the log level, optional
    [WXLog setLogLevel: WXLogLevelWarning];
//    });
}

@end
