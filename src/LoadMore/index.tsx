import React from 'react';
import { View, Text } from '@tarojs/components'
import { router } from '@ysyp/utils'

import './index.scss'
import { AtLoadMore } from 'taro-ui';

// import { LoadMore } from '@tarojs/components'
// http://www.fhdq.net/bd/94.html
/**
 * <>()（）〈〉‹›﹛﹜『』〖〗［］《》﹝﹞〔〕{}「」【】︵︶︷︸︿﹀︹︺︽︾﹁﹂﹃﹄︻︼
 */

export interface ILoadMoreProps {
  height?: string;
  moreText?: string
  loadingText?: string
  noMoreText?: string
  moreBtnStyle?: string
  noMoreTextStyle?: string
}

export const YYLoadMore = (props: ILoadMoreProps) =>{
  const { moreBtnStyle = {}, height = '40px' } = props
  const [status, setStatus] = React.useState('more')
  const handleClick = () => {
    // 开始加载
    setStatus('loading')
    // 模拟异步请求数据
    // setTimeout(() => {
    //   // 没有更多了
    //   setStatus('noMore')
    // }, 2000)
  }
  return (
    <AtLoadMore
      {...props}
      moreBtnStyle={{
        border: 'none',
        ...moreBtnStyle
      }}
      onClick={handleClick}
      status={status}
      style={{
        height
      }}
    />
  )
}

