import React from 'react';

import { View, Text, Image } from '@tarojs/components';
import { AtIcon, AtNoticebar } from 'taro-ui';

export interface IShopItemTop {
  color?: string;
  backgroundColor?: string;
  id: string;
  url?: string;
  icon: string;
  dilivery_start_price: string;
  dilivery_price: string;
  notice: string;
  distanceTime: number;
}

export const YYShopItemTop = (props: IShopItemTop) => {
  const {
    id,
    backgroundColor = '#fff',
    color = '#000',
    icon,
    distanceTime,
    dilivery_start_price,
    dilivery_price,
    notice,
  } = props;
  return (
    <View
      key={id}
      className="shop-item-top"
      style={{
        backgroundColor,
        color,
      }}
    >
      <View className="shop-item-top-detail">
        <View className="shop-item-top-left">
          <Image className="shop-item-top-icon" src={icon} />
        </View>
        <View className="shop-item-top-center">
          {/* <Text className="shop-item-top-name">
            {name}（{status}）
          </Text> */}
          {/* <Text className="shop-item-top-sale">
            月售：¥{total_sale}
          </Text> */}
          {/* <Text className="shop-item-top-address">{address}</Text> */}
          {/* <Text className="shop-item-top-time">
            营业时间：{start_time}-{end_time}
          </Text> */}
          <View className="shop-item-top-dilivery">
            起送价：¥{dilivery_start_price} ｜ 配送费: ¥{dilivery_price} ｜ {distanceTime}分钟
          </View>
          <View className="shop-item-top-notice">
            <AtNoticebar icon="volume-plus" marquee={true}>
              {notice}
            </AtNoticebar>
          </View>
        </View>
        <View className="shop-item-top-right">
          <AtIcon value="star" size="30" color="#000"></AtIcon>
          <View className="shop-item-top-start">收藏</View>
        </View>
      </View>
    </View>
  );
};
