//
//  WXCustomViewController.h
//  WeexDev
//
//  Created by MountainX on 2019/8/27.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface WXCustomViewController : UIViewController

/**
 * @abstract initializes the viewcontroller with bundle url.
 *
 * @param sourceURL The url of bundle rendered to a weex view.
 *
 * @return a object the class of WXBaseViewController.
 *
 */
- (instancetype)initWithSourceURL:(NSURL *)sourceURL;

@end

NS_ASSUME_NONNULL_END
