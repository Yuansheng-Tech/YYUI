import React from 'react';
import { View } from '@tarojs/components';
import { AtTabs } from 'taro-ui';
import { AtTabsProps } from 'taro-ui/types/tabs';
import { useStore } from 'mobx-store-provider';

import { Query } from '@ysyp/utils';
import { dataMapKeys } from '@ysyp/utils';
import { Url as YYURL } from '@ysyp/utils';

import { RootStore } from '../root.store';

export interface ITabsProps {
  url?: string;
  children?: React.ReactNode;
  tabList?: {
    title?: string;
    value?: string;
    [key: string]: any;
  }[];
  onClick?: (data: any) => void;
}

export const YYTabs = (props: AtTabsProps & ITabsProps) => {
  let { tabDirection = 'vertical', tabList = [], url = '' } = props;
  const [current, setCurrent] = React.useState(0);

  return (
    <View className="yy-tabbar">
      <Query url={url}>
        {({ data = [], loading, loaded }) => {
          if (url && data.length && tabList.length) {
            tabList = dataMapKeys(data, tabList[0]);
          }
          console.log('loading, loaded', loading, loaded);
          return (
            <AtTabs
              scroll={tabList.length > 3}
              tabDirection={tabDirection}
              tabList={loading ? [] : tabList}
              onClick={(data) => {
                const rootStore = useStore(RootStore, YYURL.getPageId());
                console.log('rootStore', rootStore);
                console.log('props.onClick', props.onClick);
                setCurrent(data);
                props.onClick && props.onClick(tabList[data]);
                console.log('tabList[data]', tabList[data].id);
                rootStore.setSelectId(tabList[data].id || '');
              }}
              current={props.current || current}
            />
          );
        }}
      </Query>
    </View>
  );
};
