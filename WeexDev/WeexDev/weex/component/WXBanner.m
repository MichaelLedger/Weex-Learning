//
//  WXBanner.m
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXBanner.h"
#import <SDCycleScrollView/SDCycleScrollView.h>

@interface WXBanner () <SDCycleScrollViewDelegate>

/** 网络图片 url string 数组 */
@property (nonatomic, copy) NSArray *images;
/** 是否无限循环,默认Yes */
@property (nonatomic,assign) BOOL infiniteLoop;
/** 是否自动滚动,默认Yes */
@property (nonatomic,assign) BOOL autoScroll;

@end

@implementation WXBanner

WX_EXPORT_METHOD(@selector(adjustWhenControllerViewWillAppera))
WX_EXPORT_METHOD(@selector(clearImagesCache))

#pragma mark - Life Cycle
- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        // handle your attributes
        if ([attributes objectForKey:@"images"]) {
            _images = [attributes objectForKey:@"images"];
        }
        
        if ([attributes objectForKey:@"infiniteLoop"]) {
            _infiniteLoop = [WXConvert BOOL:[attributes objectForKey:@"infiniteLoop"]];
        }
        
        if ([attributes objectForKey:@"autoScroll"]) {
            _autoScroll = [WXConvert BOOL:[attributes objectForKey:@"autoScroll"]];
        }
        
        // handle your styles
    }
    return self;
}

- (void)layoutDidFinish {
}

- (UIView *)loadView {
    return [SDCycleScrollView new];
}

- (void)viewWillLoad {
    
}

- (void)viewDidLoad {
    ((SDCycleScrollView *)self.view).delegate = self;
    ((SDCycleScrollView *)self.view).imageURLStringsGroup = _images;
    ((SDCycleScrollView *)self.view).infiniteLoop = _infiniteLoop;
}

- (void)viewWillUnload {
    
}

- (void)viewDidUnload {
    
}

#pragma mark - 同步
- (void)updateStyles:(NSDictionary *)styles {
    
}

#pragma mark - JS修改绑定(v-bind)后的数据才会触发，直接使用.attr来修改不会触发此方法
- (void)updateAttributes:(NSDictionary *)attributes {
    if ([attributes objectForKey:@"images"]) {
        _images = [attributes objectForKey:@"images"];
        ((SDCycleScrollView *)self.view).imageURLStringsGroup = _images;
    }
    if ([attributes objectForKey:@"infiniteLoop"]) {
        _infiniteLoop = [WXConvert BOOL:[attributes objectForKey:@"infiniteLoop"]];
        ((SDCycleScrollView *)self.view).infiniteLoop = _infiniteLoop;
    }
    if ([attributes objectForKey:@"autoScroll"]) {
        _autoScroll = [attributes objectForKey:@"autoScroll"];
        ((SDCycleScrollView *)self.view).autoScroll = _autoScroll;
    }
}

#pragma mark - 自定义事件
- (void)addEvent:(NSString *)eventName {
    if ([eventName isEqualToString:scrollEventName]) {
        //...
    }
}

- (void)removeEvent:(NSString *)eventName {
    if ([eventName isEqualToString:scrollEventName]) {
        //...
    }
}

#pragma mark - 自定义方法
/** 解决viewWillAppear时出现时轮播图卡在一半的问题，在控制器viewWillAppear时调用此方法 */
- (void)adjustWhenControllerViewWillAppera {
    [((SDCycleScrollView *)self.view) adjustWhenControllerViewWillAppera];
}

/** 清除图片缓存（此次升级后统一使用SDWebImage管理图片加载和缓存）  */
- (void)clearImagesCache {
    [SDCycleScrollView clearImagesCache];
}

#pragma mark - SDCycleScrollViewDelegate
static NSString *scrollEventName = @"didScroll";
- (void)cycleScrollView:(SDCycleScrollView *)cycleScrollView didScrollToIndex:(NSInteger)index {
    // parameter type is not right,it should be array ,map or string
    [self fireEvent:scrollEventName params:@{@"index" : [NSString stringWithFormat:@"%ld", (long)index]} domChanges:nil];
}

static NSString *selectEventName = @"didSelect";
- (void)cycleScrollView:(SDCycleScrollView *)cycleScrollView didSelectItemAtIndex:(NSInteger)index {
    // parameter type is not right,it should be array ,map or string
    [self fireEvent:selectEventName params:@{@"index" : [NSString stringWithFormat:@"%ld", (long)index]} domChanges:nil];
}

@end
