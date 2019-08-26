//
//  AppDelegate.m
//  WeexDev
//
//  Created by MountainX on 2019/8/20.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "AppDelegate.h"
#import <WeexSDK/WeexSDK.h>
#import "WXBanner.h"
#import "WXImgLoaderDefaultImpl.h"
#import "WXDebugModule.h"
#import "WXAudioPlayerProtocol.h"
#import "WXAVPlayerModule.h"
#import "WXAudioPlayer.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    // App configuration
    [WXAppConfiguration setAppGroup:@"Your app group"];
    [WXAppConfiguration setAppName:@"Your app name"];
    [WXAppConfiguration setAppVersion:@"Your app version"];
    
    //Initialize WeexSDK
    [WXSDKEngine initSDKEnvironment];
    
    //Register custom modules and components, optional.
//    [WXSDKEngine registerComponent:@"myview" withClass:[MyViewComponent class]];
//    [WXSDKEngine registerModule:@"mymodule" withClass:[MyWeexModule class]];
    [WXSDKEngine registerComponent:@"banner" withClass:[WXBanner class]];
    [WXSDKEngine registerComponent:@"audio-player" withClass:[WXAudioPlayer class]];
    [WXSDKEngine registerModule:@"debug" withClass:[WXDebugModule class]];
    [WXSDKEngine registerModule:@"audio" withClass:[WXAVPlayerModule class]];
    
    //Register the implementation of protocol, optional.
//    [WXSDKEngine registerHandler:[WXAppNavigationImpl new] withProtocol:@protocol(WXNavigationProtocol)];
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    
    //Set the log level, optional
    [WXLog setLogLevel: WXLogLevelWarning];
    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
