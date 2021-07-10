import React from 'react';
import { AtSearchBar } from 'taro-ui';
import { AtSearchBarProps } from 'taro-ui/types/search-bar';
import { useRootStore } from '@ysyp/stores';

export const YYSearchBar = (props: AtSearchBarProps) => {
  return <AtSearchBar {...props} useRootStore={useRootStore} />;
};
