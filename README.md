# Introduction

请确保你已经安装了 [Node.js](https://nodejs.org/en/)

```
This package has installed:
•    Node.js v10.16.3 to /usr/local/bin/node
•    npm v6.9.0 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.
```

## Nodejs升级至最新版
### node的安装路径
```
$ which node
/Users/mxr/.nvm/versions/node/v7.10.0/bin/node
```
上述打印标明之前使用nvm管理node，故使用一下命令升级node至稳定版本：
```
$ nvm install stable
Downloading and installing node v12.9.0...
Downloading https://nodejs.org/dist/v12.9.0/node-v12.9.0-darwin-x64.tar.gz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v12.9.0 (npm v6.10.2)

$ node -v
v12.9.0

$ which node
/Users/mxr/.nvm/versions/node/v12.9.0/bin/node
```

### nvm 其它命令
```
nvm install stable # 安装最新稳定版 node，现在是 5.0.0
nvm install 4.2.2 # 安装 4.2.2 版本
nvm install 0.12.7 # 安装 0.12.7 版本

# 特别说明：以下模块安装仅供演示说明，并非必须安装模块
nvm use 4 # 切换至 4.2.2 版本
npm install -g mz-fis # 安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis
nvm use 0 # 切换至 0.12.7 版本
npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli

nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7

nvm uninstall v6.6.0 #删除指定版本 node
```

**升级 `Nodejs` 后需要重新安装`weex-toolkit`**

### 配置环境变量
```
$ vim /etc/profile
```

然后全局安装  `weex-toolkit`。
`npm install weex-toolkit -g`

创建一个空的模板项目 `Weex + Vue.js`
`$ weex create awesome-app`

`$ cd awesome-app`
Inside this directory, you can run several commands:


  npm start
  Starts the development server for you to preview your weex page on browser
  You can also scan the QR code using weex playground to preview weex page on native

  npm run dev
  Open the code compilation task in watch mode

  npm run ios
  (Mac only, requires Xcode)
  Starts the development server and loads your app in an iOS simulator

  npm run android
  (Requires Android build tools)
  Starts the development server and loads your app on a connected Android device or emulator

  npm run pack:ios
  (Mac only, requires Xcode)
  Packaging ios project into ipa package

  npm run pack:android
  (Requires Android build tools)
  Packaging android project into apk package

  npm run pack:web
  Packaging html5 project into `web/build` folder

  npm run test
  Starts the test runner

To get started:

  cd awesome-app
  npm start

Enjoy your hacking time!

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).

## 开发环境检查
@weex-cli/doctor 模块提供对本地开发环境的检查，可使用如下命令启动：
`$ weex doctor`
该命令会检查你的本地开发环境，你可根据提示对你的开发环境进行调整，以便进行weex页面的开发工作。

```
# 终端实例
$ weex doctor

✔ Installed 1 packages
✔ Linked 0 latest versions
✔ Run 0 scripts
✔ All packages installed (used 107ms(network 105ms), speed 30.01kB/s, json 1(3.15kB), tarball 0B)

Start checking package, please wait ...
compelied, cost 0.534s
✔ Android and iOS Environment:

[✓] Android toolchain - develop for Android devices
•  Android SDK at /Users/mxr/Library/Android/sdk
•  Platform android-28, build-tools 28.0.3
•  Java version OpenJDK Runtime Environment (build 1.8.0_152-release-1343-b01).

[✓] iOS toolchain - develop for iOS devices
•  Xcode at /Applications/Xcode.app/Contents/Developer
•  Xcode 10.3
•  CocoaPods version 1.7.4

✔ Weex Cli Environment (v2.0.0-beta.31, on darwin 18.2.0):

[✔] @weex-cli/core  - core module for the weex-toolkit
[✔] @weex-cli/generator - Generator for weex-toolkit
[✔] @weex-cli/debug - Module for debug weex file
[✔] @weex-cli/compile - Plugin for compile weex file.
[✔] @weex-cli/build - Build module for weex-toolkit
[✔] @weex-cli/run - module for running iOS/Android/Web platform with weex-toolkit
[✔] @weex-cli/device - module for lanuch device with weex-toolkit
[✔] @weex-cli/doctor - Doctor module for weex-toolkit
[✔] @weex-cli/preview - preview weex page

[vue environment] check if there has Vue packages version mismatch issue

- AutoFix vue mismatch issue

✔ Installed 1 packages
✔ Linked 2 latest versions
✔ Run 0 scripts
✔ All packages installed (1 packages installed from npm registry, used 622ms(network 621ms), speed 182.82kB/s, json 3(8.86kB), tarball 104.67kB)

Start checking package, please wait ...
compelied, cost 1.243s
```

## 代码质量检查
@weex-cli/lint 模块提供对Weex代码质量校验功能，可使用如下命令启动：
`$ weex lint [file | folder] <options>`

## 调试页面
@weex-cli/debug 模块提供对Weex页面的调试能力，可使用如下命令启动：
`$ weex debug [we_file|bundles_dir] [options]`

## 运行iOS/Android工程
@weex-cli/run 模块提供添加运行Weex官方iOS/Android工程功能，你可以通过如下命令使用：
```
# 运行 iOS 模拟器预览
$ weex run ios
# 运行 Android 模拟器/真机预览
$ weex run android
# 运行 Web 端预览
$ weex run web
```
## 预览页面
@weex-cli/preview 模块提供对 Weex 项目中 .vue 文件的编译及预览能力，你可以在官方项目中使用，也可以直接对单个.vue文件进行零配置的沙箱预览，使用方法如下：
`$ weex preview [file | folder] <options>`
浏览器会自动得打开预览页面并且你可以看到你的weex页面的布局和效果。如果你在你的设备上安装了Weex Playground App，你还可以通过扫描页面上的二维码来查看页面。
使用下面的命令，你将可以预览整个文件夹中的.vue文件
`$ weex src --entry src/foo.vue`
你需要指定要预览的文件夹路径以及入口文件（通过--entry传入）。

## 编译页面
@weex-cli/compile 模块提供对 Weex 项目中 .vue 文件的编译能力，你可以在官方项目中使用，也可以直接对单个.vue文件进行零配置的沙箱编译，使用方法如下：
`$ weex compile [资源文件] [产物地址]  <options>`
例如：
`$ weex compile src build`
或
`$ weex compile src/index.vue build`

```
# 终端实例
$ weex compile src build
Time: 1958ms
Asset    Size  Chunks             Chunk Names
index.js   21 kB       0  [emitted]  index
components/HelloWorld.js  9.1 kB       1  [emitted]  components/HelloWorld
```

## 编译报错解决方案

> `ReferenceError: WebAssembly is not defined`

The WebAssembly support is added in NodeJs 8.0.0. Update your NodeJS to make it work.

### MAC升级Nodejs和Npm到最新版

```
npm WARN npm npm does not support Node.js v7.10.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 6, 8, 9, 10, 11, 12.
npm WARN npm You can find the latest version at https://nodejs.org/
```

第一步，先查看本机node.js版本：
`$ node -v`
第二步，清除node.js的cache：
`$ sudo npm cache clean -f`
第三步，安装 n 工具，这个工具是专门用来管理node.js版本的，别怀疑这个工具的名字，是他是他就是他，他的名字就是 "n"
`$ sudo npm install -g n`
第四步，安装最新版本的node.js
`$ sudo n stable`
第五步，再次查看本机的node.js版本：
`$ node -v`
第六步，更新npm到最新版：
`$ sudo npm install npm@latest -g`
第七步，验证
`$ node -v`
`$ npm -v`

## 重新安装npm配置
`$ npm install`
`$ npm audit`
`$ npm audit fix`


