import React from "react";
import ReactDOM from "react-dom";

import audiojs from "dxc-audio";

class Button extends React.Component {
  render() {
    return (
      <span
        style={{
          border: "1px solid #333",
          padding: "3px 15px",
          margin: "10px 15px"
        }}
        {...this.props}
      />
    );
  }
}
class Demo extends React.Component {
  componentWillMount() {
    this.audio = new audiojs({
      src:
        "http://m10.music.126.net/20180604130434/7a02503eaff110716dba4dc87afe6963/ymusic/5bd7/9ce7/88ae/ddfd712668977350181f320ecf2f2ae5.mp3",
      // src: "http://media-qiniu2.720static.com/@/72bjOdwmzn0/1/d3f27c6a05900b15ae03e5ffe8c24672.mp3",
      autoPlay: true,
      loop: true
    });
    window.audio = this.audio;
    this.audio.audio.addEventListener("ended", () => {
      console.log(123123);
    });
  }
  startLoop = () => {
    this.audio.startLoop();
  };
  stopLoop = () => {
    this.audio.stopLoop();
  };
  load1 = () => {
    this.audio.load("http://192.168.0.6:8080/test.mp3");
    this.audio.play();
  };
  load2 = () => {
    this.audio.load(
      "http://media-qiniu2.720static.com/@/72bjOdwmzn0/1/d3f27c6a05900b15ae03e5ffe8c24672.mp3"
    );
    this.audio.play();
  };
  render() {
    return (
      <div style={{ padding: 30 }}>
        <Button
          onClick={() => {
            this.audio.play();
          }}
        >
          播放
        </Button>
        <Button
          onClick={() => {
            this.audio.pause();
          }}
        >
          暂停
        </Button>
        <Button
          onClick={() => {
            this.audio.destroy();
          }}
        >
          销毁
        </Button>
        <Button onClick={this.startLoop}>开启循环播放</Button>
        <Button onClick={this.stopLoop}>停止循环播放</Button>
        <Button onClick={this.load1}>设置音乐1</Button>
        <Button onClick={this.load2}>设置音乐2</Button>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("__react-content"));
