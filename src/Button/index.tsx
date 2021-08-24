import React from 'react';
import { Button, ButtonProps, View } from '@tarojs/components';

export interface IButtonProps {
  title: string;
  margin?: string;
  borderRadius?: string;
}

export const YYButton = (props: IButtonProps & ButtonProps) => {
  const { title, margin = '0px', borderRadius = '0px', ...btnProps } = props;
  return (
    <View
      style={{
        margin: margin,
      }}
      className="yy-button"
    >
      <Button
        className="yy-button-btn"
        style={{
          borderRadius: borderRadius,
        }}
        {...btnProps}
      >
        {title}
      </Button>
    </View>
  );
};
