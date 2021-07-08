import React from 'react';
import { View, Text, Textarea } from '@tarojs/components';
import { TextareaProps } from '@tarojs/components/types/Textarea';

export interface ITextareaProps {
  label: string;
  defaultValue?: string;
  disabled?: boolean;
  onInput?: (val: string) => void;
  flexDirection?: 'row' | 'column';
  [key: string]: any;
}

export const YYTextarea = (props: ITextareaProps & TextareaProps) => {
  const {
    label = '标题',
    defaultValue,
    // onInput,
    flexDirection = 'row',
    ...prop
  } = props;
  return (
    <View
      className="yy-textarea"
      style={{
        flexDirection,
      }}
    >
      <Text className="yy-textarea-label">{label}</Text>
      <Textarea className="yy-textarea-value" {...prop} />
    </View>
  );
};
