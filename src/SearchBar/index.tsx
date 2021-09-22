import React from 'react';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import { AtSearchBarProps } from 'taro-ui/types/search-bar';

import { router } from '@ysyp/utils/dist/router';

export interface IYYSearchBar {
  url?: string;
}

export const YYSearchBar = (props: AtSearchBarProps & IYYSearchBar) => {
  return (
    <View
      onClick={() => {
        if (props.url) {
          router.navigateTo({
            url: props.url,
          });
        }
      }}
    >
      <AtSearchBar {...props} />
    </View>
  );
};
