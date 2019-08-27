//
//  AppDelegate.m
//  WeexDev
//
//  Created by MountainX on 2019/8/20.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "AppDelegate.h"
#import "WXProxy.h"
#import "WXCustomViewController.h"
#import <WeexSDK/WXBaseViewController.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [WXProxy registerWeex];
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    
    //    NSURL *url = [[NSBundle mainBundle] URLForResource:@"helloworld" withExtension:@"js"];// $ weex compile src/index.vue build
    //    NSURL *url = [NSURL URLWithString:@"http://192.168.3.226:8081"]; // $ npm install && npm start
    //    NSURL *url = [NSURL URLWithString:@"http://bsweb.mxrcorp.cn/weex/index.js"]; // dispatch server
    NSURL *url = [[NSBundle mainBundle] URLForResource:@"audio" withExtension:@"js"];// $ weex compile src/components/banner.vue build
    //    NSURL *url = [NSURL URLWithString:@"http://192.168.0.125:10133/PocketStoryDetail.js"];
    //    NSURL *url = [NSURL URLWithString:@"http://192.168.0.125:10133/PocketStory.js"];
    
//    WXBaseViewController *weexVc = [[WXBaseViewController alloc] initWithSourceURL:url];
    WXCustomViewController *weexVc = [[WXCustomViewController alloc] initWithSourceURL:url];
    self.window.rootViewController = [[UINavigationController alloc] initWithRootViewController:weexVc];
    
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
