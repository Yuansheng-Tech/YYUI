import React from 'react';
import { View, Text, Input } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';

export interface IInputProps {
  label: string;
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
    label = '标题',
    defaultValue = '',
    // onInput,
    flexDirection = 'row',
    ...prop
  } = props;
  return (
    <View
      className="yy-input"
      style={{
        flexDirection,
      }}
    >
      <Text className="yy-input-label">{label}</Text>
      <Input className="yy-input-value" {...prop} />
    </View>
  );
};
