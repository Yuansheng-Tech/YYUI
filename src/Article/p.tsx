import React from 'react';
import { View } from '@tarojs/components';

export interface IPProps {
  content: string;
}

export const YYP = (props: IPProps) => {
  const { content } = props;
  return <View className="at-article__p">{content}</View>;
};
