import React from "react";
import ReactDOM from "react-dom";

import audiojs from "dxc-audio";

class Demo extends React.Component {
  componentWillMount() {
    this.play1();
    this.play2();
  }
  play1() {
    const audio = new audiojs({
      autoPlay: false,
      loop: true
    });
    audio.load(
      "https://m10.music.126.net/20181025153846/957c1bc0bac2e6f1550ad15c89457467/ymusic/fc09/ba27/091f/b817b89ea35414a8c08c5ab0b34b3ae1.mp3"
    );
    audio.play();
  }
  play2() {
    const audio = new audiojs({
      autoPlay: false,
      loop: true
    });
    audio.load(
      "https://m10.music.126.net/20181025154316/4fd2e340443f25d0a0de436330feb3b4/ymusic/1007/0d1f/d375/af67bce28c981ca895c443b84f6a832e.mp3"
    );
    audio.play();
  }
  render() {
    return <div style={{ padding: 30 }} />;
  }
}
ReactDOM.render(<Demo />, document.getElementById("__react-content"));
