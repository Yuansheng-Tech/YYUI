import React from 'react';

import { View, Text, Image } from '@tarojs/components';

import { router } from '@ysyp/utils/dist/router';
import { IYYShopGoodsItem, YYShopGoodsItem } from '../Goods/shopGoodsItem';

export interface IShopWithGoodsItem {
  id: string;
  url?: string;
  icon: string;
  name: string;
  status: string;
  total_sale: string;
  dilivery_start_price: string;
  dilivery_price: string;
  start_time: string;
  end_time: string;
  distanceSpace: number;
  distanceTime: number;
  goods?: IYYShopGoodsItem[];
}

export const YYShopWithGoodsItem = (props: IShopWithGoodsItem) => {
  const {
    id,
    url = '/pages/shop/item',
    icon,
    name,
    status,
    distanceSpace,
    distanceTime,
    total_sale,
    dilivery_start_price,
    dilivery_price,
    start_time,
    end_time,
    goods = [],
  } = props;
  return (
    <View className="shop-goods-item-detail">
      <View
        className="shop-goods-item"
        onClick={() => {
          router.navigateTo({
            url: url + '?id=' + id,
          });
        }}
      >
        <View className="shop-goods-item-left">
          <Image className="shop-goods-item-icon" src={icon} alt="" />
        </View>
        <View className="shop-goods-item-center">
          <Text className="shop-goods-item-name">
            {name}（{status}）
          </Text>
          <Text className="shop-goods-item-sale">月售：¥{total_sale}</Text>
          <Text className="shop-goods-item-dilivery">
            起送价：¥{dilivery_start_price} 配送费: ¥{dilivery_price}
          </Text>
          {/* <Text className="shop-goods-item-address">{address}</Text> */}
          <Text className="shop-goods-item-time">
            营业时间：{start_time}-{end_time}
          </Text>
        </View>
        <View className="shop-goods-item-right">
          <View className="shop-goods-item-distance">距离{distanceSpace}km</View>
          <View className="shop-goods-item-distance">{distanceTime}分钟</View>
        </View>
      </View>
      <View className="shop-goods-item-good">
        {!!goods.length && goods.map((good, index) => <YYShopGoodsItem {...good} />)}
      </View>
    </View>
  );
};
