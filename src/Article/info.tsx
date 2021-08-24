import React from 'react';
import { View } from '@tarojs/components';

export interface IInfoProps {
  content: string;
}

export const YYInfo = (props: IInfoProps) => {
  const { content } = props;
  return <View className="at-article__info">{content}</View>;
};
