import React from 'react';
import { AtDivider } from 'taro-ui'

import './index.scss'

export interface ITitlelineProps {
  content?: string
  fontColor?: string
  lineColor?: string
  fontSize?: string
  height?: string
  bgColor?: string
  icon?: React.ReactNode
}

export const YYTitleline = (props: ITitlelineProps) =>{
  const {
    content = '',
    fontColor = '#000',
    lineColor = '#000',
    height = '35px',
    fontSize = '16px'
  } = props
  return <AtDivider
      content={content}
      fontColor={fontColor}
      lineColor={lineColor}
      height={height}
      fontSize={fontSize}
      className="yy-titleline"
      >
      {/* {icon} */}
    </AtDivider>
}

