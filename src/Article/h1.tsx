import React from 'react';
import { View } from '@tarojs/components';

export interface IH1Props {
  content: string;
}

export const YYH1 = (props: IH1Props) => {
  const { content } = props;
  return <View className="at-article__h1">{content}</View>;
};
