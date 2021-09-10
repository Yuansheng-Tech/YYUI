import React, { createContext, useContext, useEffect } from 'react';
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
  const rootStore = useContext(createContext(new RootStore()));
  const getUserData = async () => {
    const res = (await rootStore.miniUserStore.get()) || {};
    rootStore.miniUserStore.userData = res;
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log('rootStore', rootStore.miniUserStore);
  return (
    <View
      className="yy-login-avatar"
      style={{
        backgroundColor,
        color,
      }}
      onClick={() => {
        if (!rootStore.miniUserStore.userData.nickName) {
          router.navigateTo({
            url,
          });
        }
      }}
    >
      <AtAvatar
        className="yy-avatar"
        circle
        image={rootStore.miniUserStore.userData.avatarUrl || defaultAvatar}
        text="您的头像"
      ></AtAvatar>
      <Text className="yy-login">{rootStore.miniUserStore.userData.nickName || title}</Text>
    </View>
  );
};
