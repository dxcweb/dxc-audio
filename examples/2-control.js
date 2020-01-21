import React from "react";
import ReactDOM from "react-dom";

import audiojs from "dxc-audio";

class Demo extends React.Component {
  state = {
    isPlay: false
  };
  componentWillMount() {
    this.audio = new audiojs({
    //   src: "http://media-qiniu2.720static.com/@/8f2jOdhwOw7/1/4856f61ff4b8ccd02c3d91e1c8ba6614.mp3",
      src: "http://media-qiniu2.720static.com/@/72bjOdwmzn0/1/d3f27c6a05900b15ae03e5ffe8c24672.mp3",
      autoPlay: this.state.isPlay,
      loop: true
    });
  }
  onClick = () => {
    if (this.state.isPlay) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState({ isPlay: !this.state.isPlay });
  };
  render() {
    const { isPlay } = this.state;
    return (
      <div>
        <div style={{ margin: 30 }} onClick={this.onClick}>
          {isPlay ? "暂停" : "播放"}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("__react-content"));
