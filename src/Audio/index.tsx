import React, { Component } from 'react';
import { AudioProps } from '@tarojs/components/types/Audio';
import { Button, View } from '@tarojs/components';

/**
 * 音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口
 * https://taro-docs.jd.com/taro/docs/apis/media/audio/createInnerAudioContext
 * https://taro-docs.jd.com/taro/docs/components/media/audio/
 */

export class YYAudio extends Component<AudioProps, any> {
  innerAudioContext = Taro.createInnerAudioContext();
  // componentDidMount() {
  //     this.innerAudioContext.onPlay(() => {
  //         console.log('播放音频');
  //     });
  //     this.innerAudioContext.onPause(() => {
  //         console.log('暂停音频');
  //     });
  //     this.innerAudioContext.onStop(() => {
  //         console.log('停止');//这里会不停的执行
  //     });
  //     this.innerAudioContext.onEnded(() => {
  //         console.log('自然停止');
  //     });
  // }
  componentWillUnmount() {
    this.innerAudioContext.destroy();
  }
  onPlay = () => {
    this.innerAudioContext.src = '';
    this.innerAudioContext.play();
  };
  onPause = () => {
    this.innerAudioContext.onPause();
  };
  render() {
    return (
      <View className="yy-audio">
        {this.innerAudioContext.paused ? (
          <Button onClick={this.onPlay}>播放</Button>
        ) : (
          <Button onClick={this.onPause}>暂停</Button>
        )}
      </View>
    );
  }
}
