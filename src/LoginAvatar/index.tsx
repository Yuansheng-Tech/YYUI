import React, { createContext, useContext, useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { AtAvatar } from 'taro-ui';
import { View, Text } from '@tarojs/components';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { router } from '@ysyp/utils/dist/router';

export interface ILoginAvatarProps {
  title?: string;
  defaultAvatar?: string;
  backgroundColor?: string;
  color?: string;
  url: string;
}

export const YYLoginAvatar = (props: ILoginAvatarProps) => {
  const { title = '立即登录', defaultAvatar = '', backgroundColor, color, url = '/pages/login/index' } = props;
  const [userData, setUserData] = useState((Taro.getStorageSync('userDataProfile') || {}) as any)

  useDidShow(async () => {
    setUserData(Taro.getStorageSync('userDataProfile') || {})
  })

  return (
    <View
      className='yy-login-avatar'
      style={{
        backgroundColor,
        color,
      }}
      onClick={() => {
        if (!userData.nickName) {
          router.navigateTo({
            url,
          });
        }
      }}
    >
      <AtAvatar
        className='yy-avatar'
        circle
        image={userData.avatarUrl || defaultAvatar}
        text='您的头像'
      ></AtAvatar>
      <Text className='yy-login'>{userData.nickName || title}</Text>
    </View>
  );
};
