import React from 'react';
import { AtSearchBar } from 'taro-ui';
import { AtSearchBarProps } from 'taro-ui/types/search-bar';

import './index.scss';

export const YYSearchBar = (props: AtSearchBarProps) =>{
  return <AtSearchBar {...props} />
}