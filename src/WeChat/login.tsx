import React, { createContext, useContext, useState } from 'react';
import Taro from '@tarojs/taro';
import { Button, OpenData, View } from '@tarojs/components';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
import { HTTP_STATUS } from '@ysyp/utils/dist/fetch';

export interface IWechatLoginProps {
  loginText: string;
  warningText: string;
}

export const YYWechatLogin = (props: IWechatLoginProps) => {
  const { loginText = '微信用户登录', warningText = '欢迎回来' } = props;

  const [btnText, setBtnText] = useState(loginText);
  const rootStore = useRootStore();
  const { authStore, miniUserStore } = rootStore;

  const onGotUserInfo = (res) => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('res, res', res);
        if (res.errMsg == 'getUserProfile:ok') {
          Taro.setStorageSync('notlogin', false);
          Taro.setStorageSync('userDataProfile', res.userInfo);
          agreeAuth(res.userInfo);
        }
      },
      fail: (res) => {
        Taro.showModal({
          title: '温馨提示',
          content: '简单的信任，是你我俩故事的开始',
          showCancel: false, // 不展示取消按钮
        }).then((ModalRes) => {
          console.log('ModalRes', ModalRes);
          if (ModalRes.confirm) {
            // 点击确定按钮
            setBtnText('重新授权登录');
          }
        });
      },
    });
  };

  //获取用户基本信息
  const getUserData = async () => {
    const res = await miniUserStore.get();
    console.log('getUserData res', res);
    miniUserStore.setUserData(res.data)
    if (res.data.nickName == '微信用户') {
      await miniUserStore.put({
        id: Taro.getStorageSync('userDataProfile').id,
        nickName: Taro.getStorageSync('userDataProfile').nickName,
        avatarUrl: Taro.getStorageSync('userDataProfile').avatarUrl,
      });
    }
    
    Taro.setStorageSync(
      'userData',
      Object.assign(
        Taro.getStorageSync('userData') || {},
        miniUserStore.userData,
        res.data || {},
        Taro.getStorageSync('userDataProfile') || {}
      )
    );
  };
  const agreeAuth = (data = {}) => {
    // 清除缓存
    Taro.setStorageSync('accessToken', '');
    Taro.setStorageSync('sessionKey', '');
    // 登录
    Taro.login({
      success: async (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          const response = await authStore.wxlogin({
            code: res.code,
            ...data,
          });

          // 用户已经注册
          if (response.statusCode === HTTP_STATUS.SUCCESS) {
            Taro.setStorageSync('accessToken', response.data.accessToken);
            Taro.setStorageSync('sessionKey', response.data.session_key);
            getUserData();
            Taro.showToast({
              title: '登录成功',
              icon: 'none',
            });
            Taro.navigateBack();
          }
          // 用户还没有注册
          if (response.statusCode === HTTP_STATUS.NON_AUTHORITATIVE_INFORMATION) {
            // 注册信息使用的 token
            Taro.setStorageSync('accessToken', response.data.accessToken);
            Taro.setStorageSync('sessionKey', response.data.session_key);
            // Taro.getUserInfo().then(async (res) => {
            //   const { errMsg, userInfo } = res;
            const nearShop = Taro.getStorageSync('setShopAdress') || Taro.getStorageSync('nearByShop');
            // if (errMsg === 'getUserInfo:ok') {
            const res2 = await authStore.register({
              ...(Taro.getStorageSync('userData') || {}),
              // ...userInfo,
              shopId: nearShop.id,
              sessionKey: response.data.session_key,
              openId: response.data.openid,
              accessToken: response.data.accessToken,
              shareUserId: Taro.getStorageSync('shareUserId'),
            });
            if (res2 && res2.statusCode === HTTP_STATUS.SUCCESS) {
              Taro.setStorageSync('accessToken', res2.data.accessToken);
              Taro.setStorageSync('sessionKey', res2.data.session_key || response.data.session_key);
              Taro.setStorageSync('shareUserId', '');
              getUserData();
              Taro.showToast({
                title: '登录成功',
                icon: 'none',
              });
              Taro.navigateBack();
            } else {
              Taro.showToast({
                title: '登录失败！',
                icon: 'none',
              });
            }
            // }
            // });
          }
        } else {
          Taro.showToast({
            title: '登录失败！',
            icon: 'none',
          });
        }
      },
    });
  };
  return (
    <View className="wechat-login">
      <View className="wechat-login__logo">
        <OpenData type="userAvatarUrl" className="wechat-login__logo-img" />
      </View>
      <OpenData type="userNickName" className="wechat-login-text" />
      <View className="wechat-login-warning">{warningText}</View>
      <Button className="wechat-login-btn" openType="getUserProfile" onClick={onGotUserInfo}>
        {btnText}
      </Button>
    </View>
  );
};
