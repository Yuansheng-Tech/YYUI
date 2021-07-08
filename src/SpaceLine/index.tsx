import React from 'react';
import { View, Text } from '@tarojs/components';
export interface ISpacelineProps {
  content?: string;
  color?: string;
  fontSize?: string;
  height?: string;
  textAlign?: 'center' | 'left' | 'right';
  backgroundColor?: string;
}

export const YYSpaceline = (props: ISpacelineProps) => {
  const {
    content = '',
    color = '#000',
    height = '35px',
    fontSize = '16px',
    backgroundColor = 'transparent',
    textAlign = 'center',
  } = props;
  return (
    <View
      style={{
        color,
        height,
        lineHeight: height,
        fontSize,
        backgroundColor,
        textAlign,
      }}
      className="yy-titleline"
    >
      <Text>{content}</Text>
    </View>
  );
};
