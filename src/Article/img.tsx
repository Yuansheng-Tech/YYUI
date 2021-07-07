import React from "react"
import { Image } from "@tarojs/components"

import './index.scss'

export interface IImgProps {
  src: string;
  mode?: string;
  height?: string;
}

export const YYImg = (props: IImgProps) => {
  const {
    src,
    mode = 'widthFix',
    height
  } = props
  return <Image 
    className='at-article__img' 
    src={src} 
    mode={mode}
    style={{
      height
    }}/>
}