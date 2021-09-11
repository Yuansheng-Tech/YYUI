import React from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import { SwiperProps } from '@tarojs/components/types/Swiper';
import { router } from '@ysyp/utils/dist/router';

export interface ISwiperProps {
  vertical?: boolean;
  items: {
    url: string;
    image: string;
    imageStyle?: object;
  }[];
}

export const YYSwiper = (props: ISwiperProps & SwiperProps) => {
  let { vertical, items = [], ...others } = props;
  // items = (typeof items === 'string' && /^(\[|\})/g.test(items)) ? JSON.parse(items) : items;
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
