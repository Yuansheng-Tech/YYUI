import React from 'react';
import { Button, ButtonProps, View } from '@tarojs/components';
import { router } from '@ysyp/utils/dist/router';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';

export interface IButtonProps {
  title: string;
  store?: keyof RootStore;
  url?: string;
  margin?: string;
  fixBottom?: boolean;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
}

export const YYButton = (props: IButtonProps & ButtonProps) => {
  const { title, url, margin = '0px', borderRadius = '0px', ...btnProps } = props;
  return (
    <View
      style={{
        margin,
      }}
      className='yy-button'
    >
      <Button
        className='yy-button-btn'
        style={{
          borderRadius
        }}
        {...btnProps}
        onClick={() => {
          if (url) {
            router.navigateTo({
              url,
            });
          }
        }}
      >
        {title}
      </Button>
    </View>
  );
};
