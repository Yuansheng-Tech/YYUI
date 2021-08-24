import React from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import { SwiperProps } from '@tarojs/components/types/Swiper';
import { router } from '@ysyp/utils';

export interface IProps {
  vertical: boolean;
  items: {
    url: string;
    image: string;
    imageStyle?: object;
  }[];
}

export const YYSwiper = (props: IProps & SwiperProps) => {
  console.log('YYSwiper props', props);
  const { vertical, items = [], ...others } = props;
  return (
    <Swiper
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots
      autoplay
      {...others}
      vertical={vertical}
    >
      {items.map((val, key) => {
        return (
          <SwiperItem className="swiper-item" key={key}>
            <Image
              className="swiper-item-image"
              style={val.imageStyle}
              src={val.image}
              onClick={() =>
                router.navigateTo({
                  url: val.url,
                })
              }
            />
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};
