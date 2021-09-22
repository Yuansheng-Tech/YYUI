import React from 'react';
import { View, ScrollView } from '@tarojs/components';
import { IShopWithGoodsItem, YYShopWithGoodsItem } from './itemWithGoods';

export interface IShopWithGoodsList {
  backgroundColor: string;
  data: IShopWithGoodsItem[];
}

export const YYShopWithGoodsList = (props: IShopWithGoodsList) => {
  const { data, backgroundColor } = props;
  return (
    <View
      className={'yy-shop-goods-list'}
      style={{
        backgroundColor,
      }}
    >
      <ScrollView className="shop-goods-scroll" scrollY>
        <View className="shop-goods-list">
          {data.map((v, k) => {
            return <YYShopWithGoodsItem {...v} key={v.id + k} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
