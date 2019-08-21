//
//  ViewController.m
//  WeexDev
//
//  Created by MountainX on 2019/8/20.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WeexSDK.h>

@interface ViewController ()

@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    __weak typeof(self) weakSelf = self;
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
    NSURL *url = [[NSBundle mainBundle] URLForResource:@"helloworld" withExtension:@"js"];// $ weex compile src/index.vue build
//    NSURL *url = [[NSBundle mainBundle] URLForResource:@"mainpage" withExtension:@"js"];
    //    NSURL *url = [NSURL URLWithString:@"http://192.168.3.226:8081"]; // $ npm install && npm start
//    NSURL *url = [NSURL URLWithString:@"http://bsweb.mxrcorp.cn/weex/index.js"]; // dispatch server
    [_instance renderWithURL:url options:nil data:nil];
}

- (void)dealloc {
    NSLog(@"%s", __func__);
    [_instance destroyInstance];
}


@end
