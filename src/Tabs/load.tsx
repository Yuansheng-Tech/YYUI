import React from 'react';
import { View } from '@tarojs/components';
import useSWR from 'swr';

import { useRootStore } from '@ysyp/stores';
import { fetcher } from '@ysyp/utils';
import { ITabsProps, YYTabs } from '.';

export const YYLoadTabs = (props: ITabsProps) => {
  const { url = '', skip, take, store } = props;
  let { tabList } = props;
  if (url) {
    const rootStore = useRootStore();
    const { data } = useSWR(`${url}?take=${take}&skip=${skip}`, (url) => fetcher(url));
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
