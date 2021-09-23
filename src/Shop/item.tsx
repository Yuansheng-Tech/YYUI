import React from 'react';
import Taro from '@tarojs/taro';

import { View, Text } from '@tarojs/components';
import classnames from 'classnames';

export interface IShopItem {
  index?: number | string;
  id: string;
  name: string;
  status: string;
  address: string;
  start_time: string;
  end_time: string;
  distanceSpace: number;

  jumpShop?: (item: IShopItem) => void;
}

export const YYShopItem = (props: IShopItem) => {
  const selectShop = Taro.getStorageSync('selectShop') || {};
  const [chooseShop, setcChooseShop] = React.useState(selectShop || {});
  const { jumpShop, ...thisProps } = props;
  return (
    <View
      key={thisProps.id}
      className={classnames({
        'shop-item': true,
        'shop-item-active': thisProps.id === chooseShop.id,
      })}
      onClick={() => {
        setcChooseShop(props);
        Taro.setStorageSync('selectShop', props);
      }}
    >
      <View className="shop-item-left">
        <Text className="shop-item-name">
          {thisProps.name}（{thisProps.status}）
        </Text>
        <Text className="shop-item-address">{thisProps.address}</Text>
        <Text className="shop-item-time">
          营业时间：{thisProps.start_time}-{thisProps.end_time}
        </Text>
      </View>
      <View
        className="shop-item-right"
        onClick={() => {
          Taro.setStorageSync('selectShop', thisProps);
          jumpShop && jumpShop(thisProps);
        }}
      >
        <Text className="shop-item-choose">选择</Text>
        <Text className="shop-item-distance">距离{thisProps.distanceSpace}km</Text>
      </View>
    </View>
  );
};
