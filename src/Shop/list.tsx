import React from 'react';
import Taro from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { IShopItem, YYShopItem } from './item';
import { YYMap } from '../Map';

export interface IShopList {
  backgroundColor: string;
  data: IShopItem[];
}

export const YYShopList = (props: IShopList) => {
  const selectShop = Taro.getStorageSync('selectShop');
  const { data, backgroundColor } = props;
  return (
    <View
      className={'yy-shop-list'}
      style={{
        backgroundColor,
      }}
    >
      {selectShop && (
        <YYMap
          id={selectShop.id}
          name={selectShop.name}
          latitude={selectShop.latitude}
          longitude={selectShop.longitude}
          scale={12}
          style={`width: 100%; height: 312rpx;`}
        />
      )}
      <ScrollView className="shop-scroll" scrollY>
        <View className="shop-list">
          {data.map((v, k) => {
            return <YYShopItem {...v} key={k} index={k} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
