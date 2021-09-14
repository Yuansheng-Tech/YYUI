import React, { createContext, useContext } from 'react';
import { View } from '@tarojs/components';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useQuery } from '@ysyp/utils/dist/useQuery';
import { ITabsProps, YYTabs } from '.';

export const YYLoadTabs = (props: ITabsProps) => {
  console.log('YYLoadTabs props', props);
  const { tabUrl = '', skip = 0, take = 10, store } = props;
  let { tabList } = props;
  if (tabUrl) {
    const rootStore = useContext(createContext(new RootStore()));
    const { data } = useQuery(
      {
        url: `${tabUrl}?take=${take}&skip=${skip}`,
      },
      {}
    );
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
