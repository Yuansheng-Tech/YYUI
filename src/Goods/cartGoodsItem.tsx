import React from 'react';

import { View, Text, Image } from '@tarojs/components';

import { router } from '@ysyp/utils/dist/router';

export interface IYYCartGoodsItem {
  id: string;
  url?: string;
  icon: string;
  name: string;
  price: number;
  original_price: number;
  discount?: number;
}

export const YYCartGoodsItem = (props: IYYCartGoodsItem) => {
  const {
    id,
    url = '/pages/goods/item',
    icon,
    name,
    price,
    original_price,
    discount = Number((price / original_price) * 10).toFixed(1),
  } = props;
  return (
    <View
      key={id}
      className="cart-goods"
      onClick={() => {
        router.navigateTo({
          url: url + '?id=' + id,
        });
      }}
    >
      <View className="cart-goods-top">
        {discount < 10 && <Text className="cart-goods-discount">{discount}折</Text>}
        <Image mode="widthFix" className="cart-goods-icon" src={icon} alt="" />
      </View>
      <View className="cart-goods-bottom">
        <View className="cart-goods-name">{name}</View>
        <Text className="cart-goods-sale">¥{price}</Text>
        <Text className="cart-goods-original">¥{original_price}</Text>
      </View>
    </View>
  );
};
