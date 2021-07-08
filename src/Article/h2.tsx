import React from 'react';
import { View } from '@tarojs/components';

export interface IH2Props {
  content: string;
}

export const YYH2 = (props: IH2Props) => {
  const { content } = props;
  return <View className="at-article__h2">{content}</View>;
};
