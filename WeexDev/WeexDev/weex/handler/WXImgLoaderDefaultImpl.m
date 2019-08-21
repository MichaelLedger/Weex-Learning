//
//  WXImgLoaderDefaultImpl.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXImgLoaderDefaultImpl.h"
#import <SDWebImage/SDWebImage.h>

@implementation WXImgLoaderDefaultImpl

#pragma mark - WXImgLoaderProtocol
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock {
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] loadImageWithURL:[NSURL URLWithString:url] options:SDWebImageRetryFailed progress:^(NSInteger receivedSize, NSInteger expectedSize, NSURL * _Nullable targetURL) {
        
    } completed:^(UIImage * _Nullable image, NSData * _Nullable data, NSError * _Nullable error, SDImageCacheType cacheType, BOOL finished, NSURL * _Nullable imageURL) {
        completedBlock(image, error, finished);
    }];
}

@end
