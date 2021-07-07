import React from 'react';
import { VideoProps } from '@tarojs/components/types/Video'
// import { Video } from '@tarojs/components'

export const YYVideo = (props: VideoProps) =>{
  return <video controls={props.controls} style={{
    width: '100%'
  }}>
    <source src={props.src} />
  </video>
}
