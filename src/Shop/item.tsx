import React from 'react';
import Taro from '@tarojs/taro';

import { View, Text } from '@tarojs/components';
import classnames from 'classnames';

export interface IShopItem {
  id: string;
  name: string;
  status: string;
  address: string;
  start_time: string;
  end_time: string;
  distanceSpace: number;
}

export interface IShopItemView {
  jumpShop?: (item: IShopItem) => void;
  item: IShopItem;
  index: number
}

export const YYShopItem = (props: IShopItemView) => {
  const selectShop = Taro.getStorageSync('selectShop');
  const [chooseShop, setcChooseShop] = React.useState(selectShop)
  const { item, index } = props
  return (<View key={index} className={classnames({
    "shop-item": true,
    "shop-item-active": item.id === chooseShop.id
  })} onClick={() => {
    setcChooseShop(item);
    Taro.setStorageSync('selectShop', item);
  }}>
    <View className="shop-item-left">
      <Text className="shop-item-name">{item.name}（{item.status}）</Text>
      <Text className="shop-item-address">{item.address}</Text>
      <Text className="shop-item-time">营业时间：{item.start_time}-{item.end_time}</Text>
    </View>
    <View className="shop-item-right" onClick={() => {
      Taro.setStorageSync('selectShop', item);
      props.jumpShop(item);
    }}>
      <Text className="shop-item-choose">选择</Text>
      <Text className="shop-item-distance">距离{item.distanceSpace}km</Text>
    </View>
  </View>);
};
