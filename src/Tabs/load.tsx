import React from 'react';
import { View } from '@tarojs/components';
import useSWR from 'swr';

import { useRootStore } from '@ysyp/stores';
import { fetcher } from '@ysyp/utils';
import { ITabsProps, YYTabs } from '.';

export const YYLoadTabs = (props: ITabsProps) => {
  console.log('YYLoadTabs props', props);
  const { tabUrl = '', skip = 0, take = 10, store } = props;
  let { tabList } = props;
  if (tabUrl) {
    const rootStore = useRootStore();
    const { data } = useSWR(`${tabUrl}?take=${take}&skip=${skip}`, (tabUrl) => fetcher(tabUrl));
    const { data: queryData = [] } = data || {};
    if (store) {
      rootStore[store].setDatas(queryData);
      tabList = rootStore[store].datas;
    }
  }

  return (
    <View className="yy-tabbar">
      <YYTabs {...props} tabList={tabList} />
    </View>
  );
};
