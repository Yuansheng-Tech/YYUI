import React from 'react';
import { AudioProps } from '@tarojs/components/types/Audio';
import { Audio } from '@tarojs/components';

/**
 * 音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口
 * https://taro-docs.jd.com/taro/docs/apis/media/audio/createInnerAudioContext
 * https://taro-docs.jd.com/taro/docs/components/media/audio/
 */

export const YYAudio = (props: AudioProps) => {
  return (
    <Audio
      {...props}
      src={props.src}
      controls={props.controls}
      style={{
        width: '100%',
      }}
    />
  );
};
