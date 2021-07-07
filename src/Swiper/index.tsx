import React from 'react';
import { Swiper, SwiperItem, Image } from "@tarojs/components"
import { SwiperProps } from "@tarojs/components/types/Swiper";
import { router } from '@ysyp/utils'

import './index.scss';

export interface IProps {
  vertical: boolean
  items: {
    url: string,
    image: string,
    imageStyle?: object
  }[]
}

export const YYSwiper = (props: IProps & SwiperProps) =>{
  const { vertical, items = [] } = props
  return <Swiper
    indicatorColor='#999'
    indicatorActiveColor='#333'
    circular
    indicatorDots
    autoplay
    {...props}
    vertical={vertical}>
    {items.map((val, key) => {
      return (<SwiperItem
        className="swiper-item"
        key={key}>
        <Image
          className="swiper-item-image"
          style={val.imageStyle}
          src={val.image}
          onClick={() => router.navigateTo({
            url: val.url
          })}
        />
      </SwiperItem>)
    })}
  </Swiper>
}
