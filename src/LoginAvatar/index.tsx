import React from 'react';
import { AtAvatar } from 'taro-ui';
import { View, Text } from '@tarojs/components';

import './index.scss';

export interface ILoginAvatarProps {
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
}

export const YYLoginAvatar = (props: ILoginAvatarProps) => {
  const {
    title = '立即登录',
    image = '',
    backgroundColor,
    color
  } = props;
  return (<View className="yy-login-avatar" style={{
    backgroundColor,
    color
  }}>
    <AtAvatar className="yy-avatar" circle image={image} text='您的头像'></AtAvatar>
    <Text className="yy-login">{title}</Text>
  </View>);
}