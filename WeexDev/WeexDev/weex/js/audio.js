// { "framework": "Vue"}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _audio = __webpack_require__(4);\n\nvar _audio2 = _interopRequireDefault(_audio);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_audio2.default.el = '#root';\nnew Vue(_audio2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi8udGVtcC9jb21wb25lbnRzL2F1ZGlvLmpzPzg3NGIiXSwibmFtZXMiOlsiQXBwIiwiZWwiLCJWdWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUNBQSxnQkFBSUMsRUFBSixHQUFTLE9BQVQ7QUFDQSxJQUFJQyxHQUFKLENBQVFGLGVBQVIiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvYXVkaW8udnVlJ1xuQXBwLmVsID0gJyNyb290J1xubmV3IFZ1ZShBcHApXG4gICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLnRlbXAvY29tcG9uZW50cy9hdWRpby5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(5)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(6)\n\n/* template */\nvar __vue_template__ = __webpack_require__(7)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/mxr/Desktop/Weex-Learning/awesome-app/src/components/audio.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-fae8e614\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpby52dWU/NDEzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsQ0FBb1Y7QUFDaFg7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxDQUE2Tzs7QUFFdlE7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyxDQUF5UDtBQUN4UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IFtdXG5cbi8qIHN0eWxlcyAqL1xuX192dWVfc3R5bGVzX18ucHVzaChyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1mYWU4ZTYxNCEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdWRpby52dWVcIilcbilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy53eC9tb2R1bGVzL25vZGVfbW9kdWxlcy9fd2VleC12dWUtbG9hZGVyQDAuNy4wQHdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2F1ZGlvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mYWU4ZTYxNCEuLi8uLi8uLi8uLi8uLi8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2F1ZGlvLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvbXhyL0Rlc2t0b3AvV2VleC1MZWFybmluZy9hd2Vzb21lLWFwcC9zcmMvY29tcG9uZW50cy9hdWRpby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWZhZThlNjE0XCJcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlKSB7XG4gICAgX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG4gIH1cbn0pXG5pZiAodHlwZW9mIF9fcmVnaXN0ZXJfc3RhdGljX3N0eWxlc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX19yZWdpc3Rlcl9zdGF0aWNfc3R5bGVzX18oX192dWVfb3B0aW9uc19fLl9zY29wZUlkLCBfX3Z1ZV9zdHlsZXNfXylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8udnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"wrapper\": {\n    \"justifyContent\": \"flex-start\",\n    \"alignItems\": \"stretch\",\n    \"paddingTop\": \"40\"\n  },\n  \"banner\": {\n    \"marginTop\": \"30\",\n    \"marginRight\": \"0\",\n    \"marginBottom\": \"30\",\n    \"marginLeft\": \"0\",\n    \"width\": \"750\",\n    \"height\": 400\n  },\n  \"audioplayer\": {\n    \"marginTop\": \"30\",\n    \"marginRight\": \"0\",\n    \"marginBottom\": \"30\",\n    \"marginLeft\": \"0\",\n    \"width\": \"750\",\n    \"height\": 50\n  },\n  \"btn\": {\n    \"paddingTop\": \"20\",\n    \"paddingBottom\": \"20\",\n    \"paddingLeft\": \"20\",\n    \"paddingRight\": \"20\",\n    \"backgroundColor\": \"#0088fb\",\n    \"marginBottom\": \"20\"\n  },\n  \"btn-text\": {\n    \"color\": \"#ffffff\"\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpby52dWU/MWRmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MFwiXG4gIH0sXG4gIFwiYmFubmVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImhlaWdodFwiOiA0MDBcbiAgfSxcbiAgXCJhdWRpb3BsYXllclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfSxcbiAgXCJidG5cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA4OGZiXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwiYnRuLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9teHIvLnd4L21vZHVsZXMvbm9kZV9tb2R1bGVzL193ZWV4LXZ1ZS1sb2FkZXJAMC43LjBAd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIuanMhL1VzZXJzL214ci8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mYWU4ZTYxNCEvVXNlcnMvbXhyLy53eC9tb2R1bGVzL25vZGVfbW9kdWxlcy9fd2VleC12dWUtbG9hZGVyQDAuNy4wQHdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2F1ZGlvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'App',\n  data: function data() {\n    return {\n      infiniteLoop: false,\n      autoSroll: false,\n      images: [],\n      currentIndex: 0,\n      musicList: ['https://github.com/MichaelLedger/MichaelLedger.github.io/raw/master/bbc/sound/bbc0102_2509557LDq.mp3', 'https://michaelledger.github.io/blog/music/resources/china/gaobaiqiqiu/gaobaiqiqiu.mp3', 'https://michaelledger.github.io/blog/music/resources/korea/mydestiny/My_Destiny-Lyn.mp3']\n    };\n  },\n\n  created: function created() {\n    // weex.requireModule(\"debug\").alert(\"created\");\n    weex.requireModule(\"debug\").print(\"created\");\n    var globalEvent = weex.requireModule(\"globalEvent\");\n    globalEvent.addEventListener(\"playing\", function (e) {\n      weex.requireModule(\"debug\").print(\"playing:\" + JSON.stringify(e));\n    });\n    var that = this;\n    globalEvent.addEventListener(\"auidoPlayerFinished\", function (e) {\n      weex.requireModule(\"debug\").print(\"auidoPlayerFinished:\" + JSON.stringify(e));\n      //自动播放下一曲\n      that.handleSkip();\n    });\n    // 应用被前台的时候触发\n    globalEvent.addEventListener(\"WXApplicationDidBecomeActiveEvent\", function (e) {\n      weex.requireModule(\"debug\").print(\"WXApplicationDidBecomeActiveEvent:\" + JSON.stringify(e));\n      that.handlePlay();\n    });\n    // 应用即将被后台时候触发\n    globalEvent.addEventListener(\"WXApplicationWillResignActiveEvent\", function (e) {\n      weex.requireModule(\"debug\").print(\"WXApplicationWillResignActiveEvent:\" + JSON.stringify(e));\n      that.handlePause();\n    });\n    weex.requireModule('user').getUserInfo(function (e) {\n      weex.requireModule(\"debug\").alert(JSON.stringify(e));\n    });\n  },\n  mounted: function mounted() {\n    var banner = this.$refs.banner;\n    banner.adjustWhenControllerViewWillAppera();\n    weex.requireModule(\"debug\").print(JSON.stringify(banner));\n\n    // JS修改绑定(v-bind)后的数据才会触发，直接使用.attr来修改不会刷新DOM，setAttribute方法会报错\n    // banner.attr.infiniteLoop = true;\n    // banner.attr.autoSroll = true;\n    // banner.attr.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg',\n    //                  'http://img.bimg.126.net/photo/fyAkdW_r8znuyniLk9CPDw==/5784029297227369036.jpg',\n    //                  'http://www.33lc.com/article/UploadPic/2012-8/2012818585520420.jpg'];\n    // weex.requireModule(\"debug\").print(JSON.stringify(banner));\n\n    var self = this; //使用新变量替换this，以免this无效\n    setTimeout(function () {\n      self.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg'];\n    }, 1000);\n\n    setTimeout(function () {\n      self.infiniteLoop = true;\n      self.autoSroll = true;\n      self.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg', 'http://img.bimg.126.net/photo/fyAkdW_r8znuyniLk9CPDw==/5784029297227369036.jpg', 'http://www.33lc.com/article/UploadPic/2012-8/2012818585520420.jpg'];\n    }, 5000);\n  },\n  destroyed: function destroyed() {\n    var banner = this.$refs.banner;\n    banner.clearImagesCache();\n  },\n  methods: {\n    bannerDidSelect: function bannerDidSelect(e) {\n      // weex.requireModule(\"debug\").alert(JSON.stringify(e));\n      weex.requireModule(\"debug\").print(e.index);\n      // if (parseInt(e.index) === 0) {\n      //   weex.requireModule(\"audio-player\").play('https://github.com/MichaelLedger/MichaelLedger.github.io/raw/master/bbc/sound/bbc0102_2509557LDq.mp3');\n      // } else if (parseInt(e.index) === 1) {\n      //   weex.requireModule(\"audio-player\").play('https://michaelledger.github.io/blog/music/resources/china/gaobaiqiqiu/gaobaiqiqiu.mp3');\n      // } else if (parseInt(e.index) === 2) {\n      //   weex.requireModule(\"audio-player\").play('https://michaelledger.github.io/blog/music/resources/korea/mydestiny/My_Destiny-Lyn.mp3');\n      // }\n    },\n    handlePlay: function handlePlay(e) {\n      var music = this.musicList[this.currentIndex];\n      this.$refs.audioplayer.play(music);\n      weex.requireModule(\"debug\").alert(music);\n    },\n    handlePause: function handlePause(e) {\n      this.$refs.audioplayer.pause();\n    },\n    handleSkip: function handleSkip(e) {\n      this.currentIndex = this.currentIndex + 1 >= this.musicList.length ? 0 : this.currentIndex + 1;\n      var music = this.musicList[this.currentIndex];\n      this.$refs.audioplayer.play(music);\n      weex.requireModule(\"debug\").alert(music);\n    },\n    handlePush: function handlePush(e) {\n      var navigator = weex.requireModule('navigator');\n      navigator.push({\n        url: 'http://192.168.0.125:10133/PocketStory.js',\n        animated: \"true\"\n      }, function (event) {\n        console.log('callback: ', event);\n      });\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpby52dWU/MjdiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbmFtZTogJ0FwcCcsXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICBhdXRvU3JvbGw6IGZhbHNlLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICAgIG11c2ljTGlzdDogWydodHRwczovL2dpdGh1Yi5jb20vTWljaGFlbExlZGdlci9NaWNoYWVsTGVkZ2VyLmdpdGh1Yi5pby9yYXcvbWFzdGVyL2JiYy9zb3VuZC9iYmMwMTAyXzI1MDk1NTdMRHEubXAzJywgJ2h0dHBzOi8vbWljaGFlbGxlZGdlci5naXRodWIuaW8vYmxvZy9tdXNpYy9yZXNvdXJjZXMvY2hpbmEvZ2FvYmFpcWlxaXUvZ2FvYmFpcWlxaXUubXAzJywgJ2h0dHBzOi8vbWljaGFlbGxlZGdlci5naXRodWIuaW8vYmxvZy9tdXNpYy9yZXNvdXJjZXMva29yZWEvbXlkZXN0aW55L015X0Rlc3RpbnktTHluLm1wMyddXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIC8vIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLmFsZXJ0KFwiY3JlYXRlZFwiKTtcbiAgICB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJkZWJ1Z1wiKS5wcmludChcImNyZWF0ZWRcIik7XG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKFwiZ2xvYmFsRXZlbnRcIik7XG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlpbmdcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLnByaW50KFwicGxheWluZzpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9KTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImF1aWRvUGxheWVyRmluaXNoZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLnByaW50KFwiYXVpZG9QbGF5ZXJGaW5pc2hlZDpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgIC8v6Ieq5Yqo5pKt5pS+5LiL5LiA5puyXG4gICAgICB0aGF0LmhhbmRsZVNraXAoKTtcbiAgICB9KTtcbiAgICAvLyDlupTnlKjooqvliY3lj7DnmoTml7blgJnop6blj5FcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKFwiV1hBcHBsaWNhdGlvbkRpZEJlY29tZUFjdGl2ZUV2ZW50XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJkZWJ1Z1wiKS5wcmludChcIldYQXBwbGljYXRpb25EaWRCZWNvbWVBY3RpdmVFdmVudDpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgIHRoYXQuaGFuZGxlUGxheSgpO1xuICAgIH0pO1xuICAgIC8vIOW6lOeUqOWNs+Wwhuiiq+WQjuWPsOaXtuWAmeinpuWPkVxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJXWEFwcGxpY2F0aW9uV2lsbFJlc2lnbkFjdGl2ZUV2ZW50XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJkZWJ1Z1wiKS5wcmludChcIldYQXBwbGljYXRpb25XaWxsUmVzaWduQWN0aXZlRXZlbnQ6XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICB0aGF0LmhhbmRsZVBhdXNlKCk7XG4gICAgfSk7XG4gICAgd2VleC5yZXF1aXJlTW9kdWxlKCd1c2VyJykuZ2V0VXNlckluZm8oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLmFsZXJ0KEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9KTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgYmFubmVyID0gdGhpcy4kcmVmcy5iYW5uZXI7XG4gICAgYmFubmVyLmFkanVzdFdoZW5Db250cm9sbGVyVmlld1dpbGxBcHBlcmEoKTtcbiAgICB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJkZWJ1Z1wiKS5wcmludChKU09OLnN0cmluZ2lmeShiYW5uZXIpKTtcblxuICAgIC8vIEpT5L+u5pS557uR5a6aKHYtYmluZCnlkI7nmoTmlbDmja7miY3kvJrop6blj5HvvIznm7TmjqXkvb/nlKguYXR0cuadpeS/ruaUueS4jeS8muWIt+aWsERPTe+8jHNldEF0dHJpYnV0ZeaWueazleS8muaKpemUmVxuICAgIC8vIGJhbm5lci5hdHRyLmluZmluaXRlTG9vcCA9IHRydWU7XG4gICAgLy8gYmFubmVyLmF0dHIuYXV0b1Nyb2xsID0gdHJ1ZTtcbiAgICAvLyBiYW5uZXIuYXR0ci5pbWFnZXMgPSBbJ2h0dHA6Ly9iLXNzbC5kdWl0YW5nLmNvbS91cGxvYWRzL2l0ZW0vMjAxNTA0LzE5LzIwMTUwNDE5SDMzNDBfS0VoUVQuanBlZycsXG4gICAgLy8gICAgICAgICAgICAgICAgICAnaHR0cDovL2ltZy5iaW1nLjEyNi5uZXQvcGhvdG8vZnlBa2RXX3I4em51eW5pTGs5Q1BEdz09LzU3ODQwMjkyOTcyMjczNjkwMzYuanBnJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICdodHRwOi8vd3d3LjMzbGMuY29tL2FydGljbGUvVXBsb2FkUGljLzIwMTItOC8yMDEyODE4NTg1NTIwNDIwLmpwZyddO1xuICAgIC8vIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLnByaW50KEpTT04uc3RyaW5naWZ5KGJhbm5lcikpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvL+S9v+eUqOaWsOWPmOmHj+abv+aNonRoaXPvvIzku6XlhY10aGlz5peg5pWIXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmltYWdlcyA9IFsnaHR0cDovL2Itc3NsLmR1aXRhbmcuY29tL3VwbG9hZHMvaXRlbS8yMDE1MDQvMTkvMjAxNTA0MTlIMzM0MF9LRWhRVC5qcGVnJ107XG4gICAgfSwgMTAwMCk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuaW5maW5pdGVMb29wID0gdHJ1ZTtcbiAgICAgIHNlbGYuYXV0b1Nyb2xsID0gdHJ1ZTtcbiAgICAgIHNlbGYuaW1hZ2VzID0gWydodHRwOi8vYi1zc2wuZHVpdGFuZy5jb20vdXBsb2Fkcy9pdGVtLzIwMTUwNC8xOS8yMDE1MDQxOUgzMzQwX0tFaFFULmpwZWcnLCAnaHR0cDovL2ltZy5iaW1nLjEyNi5uZXQvcGhvdG8vZnlBa2RXX3I4em51eW5pTGs5Q1BEdz09LzU3ODQwMjkyOTcyMjczNjkwMzYuanBnJywgJ2h0dHA6Ly93d3cuMzNsYy5jb20vYXJ0aWNsZS9VcGxvYWRQaWMvMjAxMi04LzIwMTI4MTg1ODU1MjA0MjAuanBnJ107XG4gICAgfSwgNTAwMCk7XG4gIH0sXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xuICAgIHZhciBiYW5uZXIgPSB0aGlzLiRyZWZzLmJhbm5lcjtcbiAgICBiYW5uZXIuY2xlYXJJbWFnZXNDYWNoZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmFubmVyRGlkU2VsZWN0OiBmdW5jdGlvbiBiYW5uZXJEaWRTZWxlY3QoZSkge1xuICAgICAgLy8gd2VleC5yZXF1aXJlTW9kdWxlKFwiZGVidWdcIikuYWxlcnQoSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgd2VleC5yZXF1aXJlTW9kdWxlKFwiZGVidWdcIikucHJpbnQoZS5pbmRleCk7XG4gICAgICAvLyBpZiAocGFyc2VJbnQoZS5pbmRleCkgPT09IDApIHtcbiAgICAgIC8vICAgd2VleC5yZXF1aXJlTW9kdWxlKFwiYXVkaW8tcGxheWVyXCIpLnBsYXkoJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNoYWVsTGVkZ2VyL01pY2hhZWxMZWRnZXIuZ2l0aHViLmlvL3Jhdy9tYXN0ZXIvYmJjL3NvdW5kL2JiYzAxMDJfMjUwOTU1N0xEcS5tcDMnKTtcbiAgICAgIC8vIH0gZWxzZSBpZiAocGFyc2VJbnQoZS5pbmRleCkgPT09IDEpIHtcbiAgICAgIC8vICAgd2VleC5yZXF1aXJlTW9kdWxlKFwiYXVkaW8tcGxheWVyXCIpLnBsYXkoJ2h0dHBzOi8vbWljaGFlbGxlZGdlci5naXRodWIuaW8vYmxvZy9tdXNpYy9yZXNvdXJjZXMvY2hpbmEvZ2FvYmFpcWlxaXUvZ2FvYmFpcWlxaXUubXAzJyk7XG4gICAgICAvLyB9IGVsc2UgaWYgKHBhcnNlSW50KGUuaW5kZXgpID09PSAyKSB7XG4gICAgICAvLyAgIHdlZXgucmVxdWlyZU1vZHVsZShcImF1ZGlvLXBsYXllclwiKS5wbGF5KCdodHRwczovL21pY2hhZWxsZWRnZXIuZ2l0aHViLmlvL2Jsb2cvbXVzaWMvcmVzb3VyY2VzL2tvcmVhL215ZGVzdGlueS9NeV9EZXN0aW55LUx5bi5tcDMnKTtcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIGhhbmRsZVBsYXk6IGZ1bmN0aW9uIGhhbmRsZVBsYXkoZSkge1xuICAgICAgdmFyIG11c2ljID0gdGhpcy5tdXNpY0xpc3RbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgICAgdGhpcy4kcmVmcy5hdWRpb3BsYXllci5wbGF5KG11c2ljKTtcbiAgICAgIHdlZXgucmVxdWlyZU1vZHVsZShcImRlYnVnXCIpLmFsZXJ0KG11c2ljKTtcbiAgICB9LFxuICAgIGhhbmRsZVBhdXNlOiBmdW5jdGlvbiBoYW5kbGVQYXVzZShlKSB7XG4gICAgICB0aGlzLiRyZWZzLmF1ZGlvcGxheWVyLnBhdXNlKCk7XG4gICAgfSxcbiAgICBoYW5kbGVTa2lwOiBmdW5jdGlvbiBoYW5kbGVTa2lwKGUpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXggKyAxID49IHRoaXMubXVzaWNMaXN0Lmxlbmd0aCA/IDAgOiB0aGlzLmN1cnJlbnRJbmRleCArIDE7XG4gICAgICB2YXIgbXVzaWMgPSB0aGlzLm11c2ljTGlzdFt0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgICB0aGlzLiRyZWZzLmF1ZGlvcGxheWVyLnBsYXkobXVzaWMpO1xuICAgICAgd2VleC5yZXF1aXJlTW9kdWxlKFwiZGVidWdcIikuYWxlcnQobXVzaWMpO1xuICAgIH0sXG4gICAgaGFuZGxlUHVzaDogZnVuY3Rpb24gaGFuZGxlUHVzaChlKSB7XG4gICAgICB2YXIgbmF2aWdhdG9yID0gd2VleC5yZXF1aXJlTW9kdWxlKCduYXZpZ2F0b3InKTtcbiAgICAgIG5hdmlnYXRvci5wdXNoKHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4xMjU6MTAxMzMvUG9ja2V0U3RvcnkuanMnLFxuICAgICAgICBhbmltYXRlZDogXCJ0cnVlXCJcbiAgICAgIH0sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2s6ICcsIGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvbXhyLy53eC9tb2R1bGVzL25vZGVfbW9kdWxlcy9fd2VleC12dWUtbG9hZGVyQDAuNy4wQHdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlci5qcyEvVXNlcnMvbXhyLy53eC9tb2R1bGVzL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS41QGJhYmVsLWxvYWRlci9saWIhL1VzZXJzL214ci8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9hdWRpby52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"wrapper\"]\n  }, [_c('banner', {\n    ref: \"banner\",\n    staticClass: [\"banner\"],\n    attrs: {\n      \"infiniteLoop\": _vm.infiniteLoop,\n      \"autoSroll\": _vm.autoSroll,\n      \"images\": _vm.images\n    },\n    on: {\n      \"didSelect\": _vm.bannerDidSelect\n    }\n  }), _c('audio-player', {\n    ref: \"audioplayer\",\n    staticClass: [\"audioplayer\"]\n  }), _c('div', {\n    staticClass: [\"btn\"],\n    on: {\n      \"click\": _vm.handlePlay\n    }\n  }, [_c('text', {\n    staticClass: [\"btn-text\"]\n  }, [_vm._v(\"play\")])]), _c('div', {\n    staticClass: [\"btn\"],\n    on: {\n      \"click\": _vm.handlePause\n    }\n  }, [_c('text', {\n    staticClass: [\"btn-text\"]\n  }, [_vm._v(\"pause\")])]), _c('div', {\n    staticClass: [\"btn\"],\n    on: {\n      \"click\": _vm.handleSkip\n    }\n  }, [_c('text', {\n    staticClass: [\"btn-text\"]\n  }, [_vm._v(\"skip\")])]), _c('div', {\n    staticClass: [\"btn\"],\n    on: {\n      \"click\": _vm.handlePush\n    }\n  }, [_c('text', {\n    staticClass: [\"btn-text\"]\n  }, [_vm._v(\"push\")])])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpby52dWU/Y2FkYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcIndyYXBwZXJcIl1cbiAgfSwgW19jKCdiYW5uZXInLCB7XG4gICAgcmVmOiBcImJhbm5lclwiLFxuICAgIHN0YXRpY0NsYXNzOiBbXCJiYW5uZXJcIl0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5maW5pdGVMb29wXCI6IF92bS5pbmZpbml0ZUxvb3AsXG4gICAgICBcImF1dG9Tcm9sbFwiOiBfdm0uYXV0b1Nyb2xsLFxuICAgICAgXCJpbWFnZXNcIjogX3ZtLmltYWdlc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiZGlkU2VsZWN0XCI6IF92bS5iYW5uZXJEaWRTZWxlY3RcbiAgICB9XG4gIH0pLCBfYygnYXVkaW8tcGxheWVyJywge1xuICAgIHJlZjogXCJhdWRpb3BsYXllclwiLFxuICAgIHN0YXRpY0NsYXNzOiBbXCJhdWRpb3BsYXllclwiXVxuICB9KSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuXCJdLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5oYW5kbGVQbGF5XG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImJ0bi10ZXh0XCJdXG4gIH0sIFtfdm0uX3YoXCJwbGF5XCIpXSldKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuXCJdLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5oYW5kbGVQYXVzZVxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJidG4tdGV4dFwiXVxuICB9LCBbX3ZtLl92KFwicGF1c2VcIildKV0pLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJidG5cIl0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmhhbmRsZVNraXBcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuLXRleHRcIl1cbiAgfSwgW192bS5fdihcInNraXBcIildKV0pLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJidG5cIl0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmhhbmRsZVB1c2hcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuLXRleHRcIl1cbiAgfSwgW192bS5fdihcInB1c2hcIildKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9teHIvLnd4L21vZHVsZXMvbm9kZV9tb2R1bGVzL193ZWV4LXZ1ZS1sb2FkZXJAMC43LjBAd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZmFlOGU2MTQhL1VzZXJzL214ci8ud3gvbW9kdWxlcy9ub2RlX21vZHVsZXMvX3dlZXgtdnVlLWxvYWRlckAwLjcuMEB3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2F1ZGlvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);