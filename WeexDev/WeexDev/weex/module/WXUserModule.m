//
//  WXUserModule.m
//  WeexDev
//
//  Created by MountainX on 2019/8/27.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXUserModule.h"
#import <AdSupport/AdSupport.h>

#define APP_BUILD_VERSION                       [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"]
#define APP_SOFT_VERSION                        [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]
#define APP_ID_KEY                              @"10000000000000000000000000000001"

NSString  * const APP_OS_TYPE_KEY      = @"osType";
NSString  * const APP_SOFT_VERSION_KEY = @"softVersion";
NSString  * const APP_DEVICE_ID_KEY         = @"deviceId";//设备ID
NSString  * const APP_USER_ID_KEY           = @"userId";
NSString  * const APP_REGION                = @"region";//区分国内版本和国际版（0，国内版；1，国际版）
NSString  * const APP_LOCAL_DEVICE_ID_KEY   = @"deviceUnique";//本地创建的deviceid
NSString  * const APP_APP_ID_KEY          =  @"appId"; // 渠道
NSString  * const APP_LOGIN_KEY          =  @"isLogin"; // 是否登录(0, 1)

@implementation WXUserModule

WX_EXPORT_METHOD(@selector(getUserInfo:))

/*
 Module 支持返回值给 JavaScript 中的回调，回调的类型是 WXModuleKeepAliveCallback。回调的参数可以是 String 或者 Map。该 block 第一个参数为回调给 JavaScript 的数据，第二参数是一个 BOOL 值，表示该回调执行完成之后是否要被清除。JavaScript 每次调用都会产生一个回调，但是对于单独一次调用，是否要在完成该调用之后清除掉回调函数 id 就由这个选项控制，如非特殊场景，建议传 NO。
 */
- (void)getUserInfo:(WXModuleKeepAliveCallback)callback {
    /*
     广告标示符（IDFA-identifierForIdentifier）
     在同一个设备上的所有App都会取到相同的值，是苹果专门给各广告提供商用来追踪用户而设的。
     但好在Apple默认是允许追踪的，而且一般用户都不知道有这么个设置，所以基本上用来监测推广效果，是戳戳有余了。
     不过即使这是由系统存储的，但是有几种情况下，会重新生成广告标示符。
     (1)如果用户完全重置系统（(设置程序 -> 通用 -> 还原 -> 还原位置与隐私) ，这个广告标示符会重新生成。
     (2)另外如果用户明确的还原广告(设置程序-> 通用 -> 关于本机 -> 广告 -> 还原广告标示符) ，那么广告标示符也会重新生成。
     */
    NSString *adId = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    NSString *userId = @"88888888";
    NSString *appRegion = @"1";
    NSString *uuId = [self getUUID];
    
    NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys:
                          userId,APP_USER_ID_KEY,
                          adId,APP_DEVICE_ID_KEY,
                          appRegion,APP_REGION,
                          APP_SOFT_VERSION,APP_SOFT_VERSION_KEY,
                          uuId,APP_LOCAL_DEVICE_ID_KEY,
                          APP_ID_KEY,APP_APP_ID_KEY,
                          @(1),APP_LOGIN_KEY,
                          @"iOS", APP_OS_TYPE_KEY,
                          nil];
    if (callback) {
        callback(dict, NO);
    }
}

- (NSString *)getUUID
{
    CFUUIDRef uuidRef = CFUUIDCreate(NULL);
    CFStringRef uuidStringRef =CFUUIDCreateString(NULL, uuidRef);
    CFRelease(uuidRef);
    NSString *uniqueId = (__bridge_transfer NSString *)uuidStringRef;
    return uniqueId;
}

@end
