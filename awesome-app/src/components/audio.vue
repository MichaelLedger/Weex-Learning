<template>
  <div class="wrapper">
    <banner ref="banner" class="banner" :infiniteLoop="infiniteLoop" :autoSroll="autoSroll" v-bind:images="images" @didSelect="bannerDidSelect"></banner>
    <audio-player ref="audioplayer" class="audioplayer"></audio-player>
    <div class="btn" @click="handlePlay">
      <text class="btn-text">play</text>
    </div>
    <div class="btn" @click="handlePause">
      <text class="btn-text">pause</text>
    </div>
    <div class="btn" @click="handleSkip">
      <text class="btn-text">skip</text>
    </div>
    <div class="btn" @click="handlePush">
      <text class="btn-text">push</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      infiniteLoop: false,
      autoSroll: false,
      images: [],
      currentIndex: 0,
      musicList: ['https://github.com/MichaelLedger/MichaelLedger.github.io/raw/master/bbc/sound/bbc0102_2509557LDq.mp3', 'https://michaelledger.github.io/blog/music/resources/china/gaobaiqiqiu/gaobaiqiqiu.mp3', 'https://michaelledger.github.io/blog/music/resources/korea/mydestiny/My_Destiny-Lyn.mp3'],
    }
  },
  created: function () {
    // weex.requireModule("debug").alert("created");
    weex.requireModule("debug").print("created");
    var globalEvent = weex.requireModule("globalEvent");
    globalEvent.addEventListener("playing", function(e) {
      weex.requireModule("debug").print("playing:" + JSON.stringify(e));
    });
    var that = this;
    globalEvent.addEventListener("auidoPlayerFinished", function(e) {
      weex.requireModule("debug").print("auidoPlayerFinished:" + JSON.stringify(e));
      //自动播放下一曲
      that.handleSkip();
    });
    // 应用被前台的时候触发
    globalEvent.addEventListener("WXApplicationDidBecomeActiveEvent", function(e) {
      weex.requireModule("debug").print("WXApplicationDidBecomeActiveEvent:" + JSON.stringify(e));
      that.handlePlay();
    });
    // 应用即将被后台时候触发
    globalEvent.addEventListener("WXApplicationWillResignActiveEvent", function(e) {
      weex.requireModule("debug").print("WXApplicationWillResignActiveEvent:" + JSON.stringify(e));
      that.handlePause();
    });
    weex.requireModule('user').getUserInfo(function(e) {
       weex.requireModule("debug").alert(JSON.stringify(e));
    })
  },
  mounted: function () {
    var banner = this.$refs.banner;
    banner.adjustWhenControllerViewWillAppera();
    weex.requireModule("debug").print(JSON.stringify(banner));

    // JS修改绑定(v-bind)后的数据才会触发，直接使用.attr来修改不会刷新DOM，setAttribute方法会报错
    // banner.attr.infiniteLoop = true;
    // banner.attr.autoSroll = true;
    // banner.attr.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg',
    //                  'http://img.bimg.126.net/photo/fyAkdW_r8znuyniLk9CPDw==/5784029297227369036.jpg',
    //                  'http://www.33lc.com/article/UploadPic/2012-8/2012818585520420.jpg'];
    // weex.requireModule("debug").print(JSON.stringify(banner));
    
    var self = this //使用新变量替换this，以免this无效
    setTimeout(() => {
      self.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg'];
    }, 1000);

    setTimeout(() => {
      self.infiniteLoop = true;
      self.autoSroll = true;
      self.images = ['http://b-ssl.duitang.com/uploads/item/201504/19/20150419H3340_KEhQT.jpeg',
                     'http://img.bimg.126.net/photo/fyAkdW_r8znuyniLk9CPDw==/5784029297227369036.jpg',
                     'http://www.33lc.com/article/UploadPic/2012-8/2012818585520420.jpg'];
    }, 5000);
  },
  destroyed: function () {
    var banner = this.$refs.banner;
    banner.clearImagesCache();
  },
  methods: {
    bannerDidSelect: function(e) {
      // weex.requireModule("debug").alert(JSON.stringify(e));
      weex.requireModule("debug").print(e.index);
      // if (parseInt(e.index) === 0) {
      //   weex.requireModule("audio-player").play('https://github.com/MichaelLedger/MichaelLedger.github.io/raw/master/bbc/sound/bbc0102_2509557LDq.mp3');
      // } else if (parseInt(e.index) === 1) {
      //   weex.requireModule("audio-player").play('https://michaelledger.github.io/blog/music/resources/china/gaobaiqiqiu/gaobaiqiqiu.mp3');
      // } else if (parseInt(e.index) === 2) {
      //   weex.requireModule("audio-player").play('https://michaelledger.github.io/blog/music/resources/korea/mydestiny/My_Destiny-Lyn.mp3');
      // }
    },
    handlePlay: function(e) {
      let music = this.musicList[this.currentIndex];
      this.$refs.audioplayer.play(music);
      weex.requireModule("debug").alert(music);
    },
    handlePause: function(e) {
      this.$refs.audioplayer.pause();
    },
    handleSkip: function(e) {
      this.currentIndex = this.currentIndex + 1 >= this.musicList.length ? 0 : this.currentIndex + 1;
      let music = this.musicList[this.currentIndex];
      this.$refs.audioplayer.play(music);
      weex.requireModule("debug").alert(music);
    },
    handlePush: function(e) {
      var navigator = weex.requireModule('navigator')
      navigator.push({
        url: 'http://192.168.0.125:10133/PocketStory.js',
        animated: "true"
      }, event => {
        console.log('callback: ', event)
      })
    },
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: flex-start;
    align-items: stretch;
    padding-top: 40px;
  }
  .banner {
    margin: 30px 0px 30px 0px;
    /* weex是以750个像素点作为默认页面宽度的 */
    width: 750px;
    height: 400x;
  }
  .audioplayer {
    margin: 30px 0px 30px 0px;
    /* weex是以750个像素点作为默认页面宽度的 */
    width: 750px;
    height: 50x;
  }
  .btn {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #0088fb;
  margin-bottom: 20px;
  }
  .btn-text {
  color: #fff;
  }
</style>
