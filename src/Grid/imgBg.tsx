import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';

export interface IImgBgGridProps {
  mode: 'square' | 'rect';
  hasBorder: boolean;
  height?: string;
  columnNum: number;
  data: {
    image: string;
    title: string;
    value: string;
    url: string;
  }[];
}

export const YYImgBgGrid = (props: IImgBgGridProps) => {
  const { mode = 'rect', height = 'auto', hasBorder = true, data, columnNum = 1 } = props;
  return (
    <View className="yy-img-bg-row at-row at-row--wrap">
      {data.map((v, k) => {
        return (
          <View
            className={classnames(
              {
                'at-col': true,
                'yy-img-bg-border': hasBorder,
              },
              `at-col-${12 / columnNum}`
            )}
            style={{
              backgroundImage: `url(${v.image})`,
              height,
            }}
            key={k}
          >
            <Text className="yy-img-bg-title">{v.title}</Text>
            <Text className="yy-img-bg-value">{v.value}单</Text>
          </View>
        );
      })}
    </View>
  );
};
