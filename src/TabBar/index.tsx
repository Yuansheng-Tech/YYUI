import React from 'react';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import { AtTabBarProps } from 'taro-ui/types/tab-bar';
import { router } from '@ysyp/utils/dist/router';

export interface ITabBarProps {
  defaultValue: string;
  tabList: {
    title: string;
    value: string;
    url: string;
  }[];
}

export const YYTabBar = (props: ITabBarProps & AtTabBarProps) => {
  const { defaultValue, tabList } = props;
  const [current, setCurrent] = React.useState(Number(defaultValue || '0'));
  console.log('current', current, tabList[current]);
  return (
    <View className="yy-tabbar">
      <AtTabBar
        // scroll={props.tabList.length > 3}
        tabList={tabList}
        onClick={(data) => {
          console.log('current data', data)
          setCurrent(data);
          const url = tabList.find((v) => Number(v.value) === data)?.url;
          url &&
            router.navigateTo({
              url,
            });
        }}
        current={current}
      />
    </View>
  );
};
