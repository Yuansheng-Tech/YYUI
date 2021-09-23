import React from 'react';

import { View, Text, Image } from '@tarojs/components';

import { router } from '@ysyp/utils/dist/router';

export interface IYYShopGoodsItem {
  id: string;
  url?: string;
  icon: string;
  name: string;
  price: number;
  original_price: number;
  discount?: number;
}

export const YYShopGoodsItem = (props: IYYShopGoodsItem) => {
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
      className="shop-goods"
      onClick={() => {
        router.navigateTo({
          url: url + '?id=' + id,
        });
      }}
    >
      <View className="shop-goods-top">
        {discount < 10 && <Text className="shop-goods-discount">{discount}折</Text>}
        <Image mode="widthFix" className="shop-goods-icon" src={icon} />
      </View>
      <View className="shop-goods-bottom">
        <View className="shop-goods-name">{name}</View>
        <Text className="shop-goods-sale">¥{price}</Text>
        <Text className="shop-goods-original">¥{original_price}</Text>
      </View>
    </View>
  );
};
