import React, { createContext, useContext, useState } from 'react';
import { AtTabs } from 'taro-ui';
import { TabItem } from 'taro-ui/types/tab-bar';
import { RootStore } from '@ysyp/stores/dist/RootStore';
export interface ITabsProps {
  store?: string;
  tabUrl?: string;
  take?: number;
  skip?: number;
  current?: number;
  children?: React.ReactNode;
  tabList?: (TabItem & { id: string; name: string; value: string })[];
  tabDirection?: 'vertical' | 'horizontal';
  onClick?: (data: any) => void;
  style?: object;
}

export const YYTabs = (props: ITabsProps) => {
  let { tabDirection = 'vertical', tabList = [], store, current: propsCurrent } = props;
  const [current, setCurrent] = useState(propsCurrent || 0);
  const rootStore = useContext(createContext(new RootStore()));
  return (
    <AtTabs
      scroll={tabList.length > 3}
      tabDirection={tabDirection}
      tabList={tabList.map((v) => ({
        ...v,
        value: v.id,
        title: v.name,
        key: v.id,
      }))}
      onClick={(data) => {
        /** 当前分类 */
        if (store && rootStore[store].data.id !== tabList[data].id) {
          rootStore[store].setPage({
            skip: 0,
          });
          rootStore[store].setData(tabList[data]);
        }
        setCurrent(data);
      }}
      current={current}
    />
  );
};
