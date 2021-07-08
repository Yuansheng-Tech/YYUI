import React from 'react';
import { VideoProps } from '@tarojs/components/types/Video'
import { Video } from '@tarojs/components'

export const YYVideo = (props: VideoProps) =>{
  return <Video {...props}
    src={props.src}
    controls={props.controls}
    style={{
      width: '100%'
    }} />
}
