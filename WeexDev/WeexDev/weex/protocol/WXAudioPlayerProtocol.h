//
//  WXAudioPlayerProtocol.h
//  WeexDev
//
//  Created by MountainX on 2019/8/21.
//  Copyright © 2019 MTX Software Technology Co.,Ltd. All rights reserved.
//

#import "WXModuleProtocol.h"

@protocol WXAudioPlayerProtocol <WXModuleProtocol>

- (void)play:(NSString *)audioUrl;
- (void)pause;

@end
