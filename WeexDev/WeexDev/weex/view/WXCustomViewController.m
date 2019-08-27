//
//  WXCustomViewController.m
//  WeexDev
//
//  Created by MountainX on 2019/8/27.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXCustomViewController.h"
#import <WeexSDK/WeexSDK.h>

@interface WXCustomViewController ()

@property (nonatomic, copy) NSURL *url;
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;

@end

@implementation WXCustomViewController

- (instancetype)initWithSourceURL:(NSURL *)sourceURL {
    if (self = [super init]) {
        _url = sourceURL;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
//    [self.navigationController setNavigationBarHidden:YES animated:YES];
    
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    
    __weak __typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:view];
    };
    _instance.onFailed = ^(NSError *error) {
        //process failure, you could open an h5 web page instead or just show the error.
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
    };
    
    //    NSURL *url = [NSURL URLWithString:_urlStr];
    [_instance renderWithURL:_url options:nil data:nil];
}

- (void)dealloc {
    NSLog(@"%s", __func__);
    [_instance destroyInstance];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
