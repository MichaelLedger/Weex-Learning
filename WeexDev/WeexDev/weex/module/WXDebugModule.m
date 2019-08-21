//
//  WXDebugModule.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXDebugModule.h"
#import <UIKit/UIKit.h>

@implementation WXDebugModule

// expose method to JavaScript
WX_EXPORT_METHOD(@selector(print:))
WX_EXPORT_METHOD(@selector(alert:))

#pragma mark - WXModuleProtocol
- (void)print:(id)data {
    NSLog(@"<Weex>[print]:%@", data);
}

- (void)alert:(NSString *)msg {
    UIAlertController *alertVc = [UIAlertController alertControllerWithTitle:@"提示" message:msg preferredStyle:UIAlertControllerStyleAlert];
    [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alertVc animated:YES completion:nil];
}

@end
