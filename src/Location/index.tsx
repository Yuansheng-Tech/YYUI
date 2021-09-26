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
  url?: string;
  chooseLocation?: boolean;
  chooseAddress?: boolean;
}

export const YYLocation = (props: ILocationProps) => {
  const {
    margin = '0px',
    padding = '0px',
    borderRadius = '0px',
    locationImage,
    name,
    url,
    chooseAddress,
    chooseLocation
  } = props;

  const handlePosition = () => {
    if (url) {
      router.navigateTo({
        url,
      });
    } else if (chooseLocation) {
      Taro.getLocation({
        type: 'wgs84',
        success: function (res) {
          // const latitude = res.latitude
          // const longitude = res.longitude
          // const speed = res.speed
          // const accuracy = res.accuracy
          console.log('res getLocation', res)
          Taro.chooseLocation({
            complete: (res) => {console.log('complete res', res)},
            fail: (res) => {console.log('fail res', res)},
            latitude: res.latitude,
            longitude: res.longitude,
            success: (res) => {console.log('success res', res)}, 
          })
        }
      })
    } else if (chooseAddress) {
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
  }
  return (
    <View
      className="yy-location-content"
      style={{
        margin,
        padding,
        borderRadius,
      }}
    >
      <Image className="yy-location-content_icon" src={locationImage} />
      {name && <View className="yy-location-content_text">{name}</View>}
      <View className="yy-location-content_position" onClick={handlePosition}>重新定位</View>
    </View>
  );
};
