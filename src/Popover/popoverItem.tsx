import React from 'react';
import { View } from '@tarojs/components';
export default function TaroPopoverItemComponent(props) {
  const { height = 50, hasline = false } = props;

  return (
    <View
      className={`popover-item ${hasline ? 'underline' : ''}`}
      hoverClass="popover-item-hover"
      style={`height:${height}px;line-height:${height}px;`}
    >
      {props.children}
    </View>
  );
}
