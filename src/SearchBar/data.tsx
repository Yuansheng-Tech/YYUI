import { AtSearchBarProps } from 'taro-ui/types/search-bar';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useContext, createContext } from 'react';

export const searchBarDataSource: AtSearchBarProps = {
  placeholder: '', // 输入框占位符
  actionName: '搜索', // 右侧按钮文案
  maxLength: 100, // 最大输入长度
  value: '', // 输入框当前值
  fixed: false, // 是否固定顶部
  disabled: false, // 是否禁止输入
  focus: false, // 是否聚焦
  showActionButton: false, // 是否一直显示右侧按钮
  inputType: 'text', // 'text' | 'number' | 'idcard' | 'digit'
  onConfirm: (event) => {
    console.log('onConfirm event', event, useContext(createContext(new RootStore())));
  },
  onActionClick: (event) => {
    console.log('onConfirm event', event, useContext(createContext(new RootStore())));
  },
  onChange: (value: string) => {
    console.log('onChange value, event', value);
  },
};
