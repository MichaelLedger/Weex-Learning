//
//  WXDebugModule.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXDebugModule.h"

@implementation WXDebugModule

/*
 Module 进阶
 关于 Module 和 Module 方法的执行特性（同步、异步；执行线程），需要了解：
 
 weexInstance
 在一个 Weex 页面中，默认 WXSDKInstance 的实例持有多个 module 的实例, 而 Module 的实例是是没有对 WXSDKInstance 做持有的，在自定义的 module 中添加 @synthesize weexInstance，module 实例可以对持有它本身的 WXSDKInstance 实例做一个弱引用，通过 weexInstance 可以拿到调用该 module 的页面的一些信息。
 
 targetExecuteThread
 Module 方法默认会在 UI 线程（iOS 主线程）中被调用，建议不要在这做太多耗时的任务。如果你的任务不需要在 UI 线程执行或需要在特定线程执行，需要实现 WXModuleProtocol 中的 - (NSThread *) 的方法，并返回你希望方法执行所在的线程。
 
 WXModuleKeepAliveCallback
 Module 支持返回值给 JavaScript 中的回调，回调的类型是 WXModuleKeepAliveCallback。回调的参数可以是 String 或者 Map。该 block 第一个参数为回调给 JavaScript 的数据，第二参数是一个 BOOL 值，表示该回调执行完成之后是否要被清除。JavaScript 每次调用都会产生一个回调，但是对于单独一次调用，是否要在完成该调用之后清除掉回调函数 id 就由这个选项控制，如非特殊场景，建议传 NO。
 
 WX_EXPORT_METHOD_SYNC
 使用 WX_EXPORT_METHOD 暴露到前端的方法都是异步方法(获得结果需要通过回调函数获得)。如果期望获得同步调用结果，可以使用 WX_EXPORT_METHOD_SYNC 声明同步的 Module 方法。
 */
// expose method to JavaScript
WX_EXPORT_METHOD(@selector(print:))
WX_EXPORT_METHOD(@selector(alert:))

#pragma mark - WXModuleProtocol
- (void)print:(id)data {
#ifdef DEBUG
    NSLog(@"<Weex>[print]:%@", data);
#endif
}

- (void)alert:(NSString *)msg {
#ifdef DEBUG
    UIAlertController *alertVc = [UIAlertController alertControllerWithTitle:@"提示" message:msg preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                          handler:^(UIAlertAction * action) {
                                                          }];
    [alertVc addAction:defaultAction];
    [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alertVc animated:YES completion:nil];
#endif
}

@end
