import React from 'react';
import { IgoodsGridProps } from './index';
import { View } from '@tarojs/components';
import { ITabsProps } from '../Tabs/index';
import { YYLoadTabs } from '../Tabs/load';
import { YYLoadGoodsGrid } from './load';

export interface ITabGoodsProps {
  tabs: ITabsProps;
  goods: IgoodsGridProps;
}

export const TabGoods = (props: ITabGoodsProps) => {
  return (
    <View className="yy-tab-goods">
      <YYLoadTabs {...props.tabs} />
      <YYLoadGoodsGrid {...props.goods} />
    </View>
  );
};
