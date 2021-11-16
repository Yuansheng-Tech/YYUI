import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
export interface IInputProps {
  name: string;
  label: string;
  store?: keyof RootStore;
  type?: 'text' | 'number' | 'idcard' | 'digit';
  password?: boolean;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  onInput?: (val: string) => void;
  flexDirection?: 'row' | 'column';
  [key: string]: any;
}

export const YYInput = (props: IInputProps & InputProps) => {
  const {
    name = 'text',
    store = 'weappStore',
    label = '标题',
    // defaultValue = '',
    // onInput,
    flexDirection = 'row',
    ...prop
  } = props;
  const rootStore = useRootStore();
  if (prop.disabled) {
    const instance = Taro.getCurrentInstance()
    console.log('instance', instance?.router?.params, name)
    prop.value = instance?.router?.params[name || ''] || ''

    store && (rootStore[store].data = {
      ...rootStore[store].data,
      [name]: prop.value
    })
  }
  return (
    <View
      className='yy-input'
      style={{
        flexDirection,
      }}
    >
      <Text className='yy-input-label'>{label}</Text>
      <Input className='yy-input-value' {...prop}
        onInput={(str) => {
          console.log('rootStore[store].data1', name, str.detail.value, rootStore[store].data);
          store && (rootStore[store].data = {
            ...rootStore[store].data,
            [name]: str.detail.value
          })
          // store && rootStore[store].setData({
          //   ...rootStore[store].data,
          //   [name]: str.detail.value
          // });

          console.log('rootStore[store].data2', name, str.detail.value, rootStore[store].data);
        }}
      />
    </View>
  );
};
