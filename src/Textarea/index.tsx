import React, { createContext, useContext } from 'react';
import { View, Text, Textarea } from '@tarojs/components';
import { TextareaProps } from '@tarojs/components/types/Textarea';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';

export interface ITextareaProps {
  name: string;
  label: string;
  store?: keyof RootStore;
  defaultValue?: string;
  disabled?: boolean;
  onInput?: (val: string) => void;
  flexDirection?: 'row' | 'column';
  [key: string]: any;
}

export const YYTextarea = (props: ITextareaProps & TextareaProps) => {
  const {
    label = '标题',
    name = 'text',
    store = 'weappStore',
    defaultValue,
    // onInput,
    flexDirection = 'row',
    ...prop
  } = props;
  const rootStore = useRootStore();
  return (
    <View
      className='yy-textarea'
      style={{
        flexDirection,
      }}
    >
      <Text className='yy-textarea-label'>{label}</Text>
      <Textarea className='yy-textarea-value' {...prop}
        onInput={(str) => {
          store && rootStore[store].setData({
            ...rootStore[store].data,
            [name]: str
          })
        }}
      />
    </View>
  );
};
