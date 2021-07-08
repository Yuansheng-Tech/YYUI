import React from 'react';
import { View, Text } from '@tarojs/components';
import Add, { IAddProps } from './add'

export interface ICartAddProps {
  title: string;
  subTitle?: string;
}

export const YYCartAdd = (props: ICartAddProps & IAddProps) => {
  const { title, subTitle, ...addProps } = props;
  return (<View className="yy-cartadd">
    <Text className="yy-cartadd-title">
      {title}
      {subTitle && <Text className="yy-cartadd-subtitle">(1件起购)</Text>}</Text>
    <Add {...addProps} />
  </View>)
}