import React, { createContext, useContext, useState } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
import { router } from '@ysyp/utils/dist/router';

export interface ILogoutProps {
  title?: string;
  backgroundColor?: string;
  color?: string;
  url: string;
}

export const YYLogout = (props: ILogoutProps) => {
  const { title = '退出登录', url = '/pages/login/index' } = props;
  const { miniUserStore } = useRootStore();
  const [userData, setUserData] = useState((Taro.getStorageSync('userDataProfile') || {}) as any)

  useDidShow(async () => {
    setUserData(Taro.getStorageSync('userDataProfile') || {})
  });

  return (
    <View
      className='yy-login-avatar'
      onClick={() => {
        miniUserStore.setUserData({})
        Taro.setStorageSync('userDataProfile', {})
        Taro.setStorageSync("notlogin", true);
        Taro.removeStorageSync("accessToken");

        Taro.navigateTo({
          url: url || "/pages/login/index"
        });
      }}
    >
      {userData.nickName && <Button
        className='yy-logout'
      >{title}</Button>}
    </View>
  );
};
