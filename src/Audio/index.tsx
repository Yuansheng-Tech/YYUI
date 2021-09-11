import React from 'react';
import { AudioProps } from '@tarojs/components/types/Audio';

/**
 * 音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口
 * https://taro-docs.jd.com/taro/docs/apis/media/audio/createInnerAudioContext
 * https://taro-docs.jd.com/taro/docs/components/media/audio/
 */

export const YYAudio = (props: AudioProps) => {
  const innerAudioContext = Taro.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  innerAudioContext.src =
    'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
  innerAudioContext.onPlay(() => {
    console.log('开始播放');
  });
  innerAudioContext.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
  });
  return innerAudioContext;
};
