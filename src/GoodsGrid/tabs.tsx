import React from 'react';
import { YYTabs } from '../Tabs';
import { YYGoodsGrid } from './index';
import { YYLoadMore } from '../LoadMore';
import { View } from '@tarojs/components';

export interface ITabGoodsProps {}

export const TabGoods = (props: ITabGoodsProps) => {
  return (
    <View className="yy-tab-goods">
      <YYTabs {...props} />
      <YYGoodsGrid {...props} />
    </View>
  );
};
