import React from 'react';
import { View, Button } from '@tarojs/components';
import { openVoice as Voice } from '@ysyp/utils';

export const YYPlayVioce = () => {
  const openVoice = () => {
    console.log('准备播报语音');
    Voice('你好，我是该插件的作者摆头方');
    Voice('欢迎使用百度语音合成接口');
    Voice('祝您生活愉快, 万事顺利！');
    Voice('谢谢！');
  };

  const getAudioObject = async () => {
    console.log('准备获取音频对象');
    const audio = await Voice({
      voiceSet: {
        tex: '返回了音频对象',
      },
      returnAudio: true,
    });
    console.log('获取音频对象');
    //@ts-ignore
    audio.onPlay(() => {
      console.log('音频开始播放了');
    });
    //@ts-ignore
    audio.play();
  };

  return (
    <View className="content" style="text-align: center;height: 400px;">
      <View>
        <Button type="primary" onClick={openVoice}>
          播放语音
        </Button>
        <Button type="primary" style="margin-top: 10px;" onClick={getAudioObject}>
          获取音频对象播放
        </Button>
      </View>
    </View>
  );
};
