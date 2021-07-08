import React from 'react';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import { AtTabBarProps } from 'taro-ui/types/tab-bar';

export interface ITabBarProps {
  tabList: {
    title: string;
    value: string;
  }[];
  onClick?: (data: any) => void;
}

export const YYTabBar = (props: ITabBarProps & AtTabBarProps) => {
  const [current, setCurrent] = React.useState(0);
  return (
    <View className="yy-tabbar">
      <AtTabBar
        // scroll={props.tabList.length > 3}
        tabList={props.tabList}
        onClick={(data) => {
          setCurrent(data);
          props.onClick(props.tabList[data]);
        }}
        current={current}
      />
    </View>
  );
};
