import React from 'react';
import { View } from '@tarojs/components';
import { IImageProps, YYImage } from './index';

export interface IImageListProps {
  flexDirection?: 'row' | 'column';
  data: IImageProps[];
}

export const YYImageList = (props: IImageListProps) => {
  const { flexDirection = 'column', data = [] } = props;
  return (
    <View
      className="yy-image-list"
      style={{
        flexDirection,
      }}
    >
      {data.map((v: IImageProps, k: number) => (
        <YYImage {...v} key={k} />
      ))}
    </View>
  );
};
