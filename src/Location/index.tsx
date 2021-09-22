import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { router } from '@ysyp/utils/dist/router';

export interface ILocationProps {
  margin?: string;
  padding?: string;
  borderRadius?: string;
  locationImage: string;
  name?: string;
  url: string;
}

export const YYLocation = (props: ILocationProps) => {
  const { margin = '0px', padding = '0px', borderRadius = '0px', locationImage, name, url } = props;

  return (
    <View
      className="yy-location-content"
      style={{
        margin,
        padding,
        borderRadius,
      }}
      onClick={() => {
        if (url) {
          router.navigateTo({
            url,
          });
        } else {
          Taro.chooseAddress({
            success: function (res) {
              console.log(res.userName);
              console.log(res.postalCode);
              console.log(res.provinceName);
              console.log(res.cityName);
              console.log(res.countyName);
              console.log(res.detailInfo);
              console.log(res.nationalCode);
              console.log(res.telNumber);
            },
          });
        }
      }}
    >
      <Image className="yy-location-content_icon" src={locationImage} />
      {name && <View className="yy-location-content_text">{name}</View>}
    </View>
  );
};
