import React from 'react';
import { IgoodsGridProps } from './index';
import { View } from '@tarojs/components';
import { ITabsProps } from '../Tabs/index';
import { YYLoadTabs } from '../Tabs/load';
import { YYLoadMoreGoodsGrid } from './more';

export interface ITabGoodsProps {
  tabDirection: 'vertical' | 'horizontal';
  flexDirection: 'row' | 'column';
  tabs: ITabsProps;
  tabUrl: string;
  goods: IgoodsGridProps;
  goodUrl: string;
}

export const YYTabGoods = (props: ITabGoodsProps) => {
  console.log('YYTabGoods props', props);
  const { tabDirection, flexDirection, tabUrl, goodUrl } = props;
  return (
    <View
      className="yy-tab-goods"
      style={{
        flexDirection,
      }}
    >
      <YYLoadTabs {...props.tabs} tabDirection={tabDirection} tabUrl={tabUrl} />
      <YYLoadMoreGoodsGrid {...props.goods} goodUrl={goodUrl} />
    </View>
  );
};
