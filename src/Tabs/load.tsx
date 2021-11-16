import React, { createContext, useContext } from 'react';
import { View } from '@tarojs/components';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
import { useQuery } from '@ysyp/utils/dist/useQuery';
import { ITabsProps, YYTabs } from '.';

export const YYLoadTabs = (props: ITabsProps) => {
  const { tabUrl = '', skip = 0, take = 10, store } = props;
  let { tabList } = props;
  const rootStore = useRootStore();
  if (tabUrl) {
    const {
      data: queryData = [],
      loaded,
      loading,
    } = useQuery(
      {
        url: `${tabUrl}?take=${take}&skip=${skip}`,
      },
      {}
    );

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
