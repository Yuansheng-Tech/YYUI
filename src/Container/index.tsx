import React from 'react';
import { View } from '@tarojs/components'
import csstype from 'csstype'


import './index.scss'

// import { Container } from '@tarojs/components'
// http://www.fhdq.net/bd/94.html
/**
 * <>()（）〈〉‹›﹛﹜『』〖〗［］《》﹝﹞〔〕{}「」【】︵︶︷︸︿﹀︹︺︽︾﹁﹂﹃﹄︻︼
 */

export interface IContainerProps {
  display?:  string,
  height: string,
  width?: string,
  flexDirection: csstype.Property.FlexDirection,
  children: React.ReactNode
}

export const YYContainer = (props: IContainerProps) =>{
  const {
    display = 'flex',
    height = '100px', // initial
    width = '100%',
    flexDirection = 'column',
    children = null
  } = props

  return <View className="yy-container" style={{
    display: display,
    width: width,
    height: height,
    flexDirection
  }}>
    {children}
  </View>
}

