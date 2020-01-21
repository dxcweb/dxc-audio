export default class AudioJs {
  constructor() {
    this.audio = new Audio();
    this.autoPlayEvent();
    this.loopEvent();
    this.audio.src = "http://static.tuobacco.com/audio/2020-01-21/23cd7b5031c3bce23349688437fe6e43.mp3";
    this.play();
  }
  setLoop = status => {
    if (status) {
      this.startLoop();
    } else {
      this.stopLoop();
    }
  };
  autoPlayEvent = () => {
    const _autoPlay = () => {
      this.removeEvent();
      let promise = this.audio.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // ios和谷歌66+需要用户点击屏幕开始自动播放
          document.addEventListener("touchstart", _autoPlay, false);
          document.addEventListener("click", _autoPlay, false);
          // 微信端自动播放
          document.addEventListener("WeixinJSBridgeReady", _autoPlay, false);
        });
      }
    };
    this.removeEvent = () => {
      document.removeEventListener("touchstart", _autoPlay, false);
      document.removeEventListener("click", _autoPlay, false);
    };
    this.play = _autoPlay;
  };
  load = src => {
    this.audio.src = src;
  };
  loopEvent = () => {
    const _ended = () => {
      this.log("播放结束事件");
      this.audio.play();
    };
    this.startLoop = () => {
      this.log("开始循环播放");
      this.audio.removeEventListener("ended", _ended);
      this.audio.addEventListener("ended", _ended);
      // if (this.audio.ende) {
      //   this.play()
      // }
    };
    this.stopLoop = () => {
      this.log("停止循环播放");
      this.audio.removeEventListener("ended", _ended);
    };
  };
  pause = () => {
    this.audio.pause();
  };
  destroy = () => {
    this.log("销毁");
    this.load(null);
  };
  log = msg => {
    // alert(msg);
  };
}
