import { ILoginAvatarProps } from './index';
import { ILogoutProps } from './logout';

export const loginAvatarDataSource: ILoginAvatarProps = {
  title: '立即登录',
  defaultAvatar: '',
  backgroundColor: 'red',
  color: '#FFFFFF',
  url: '/pages/login/index',
};

export const logoutDataSource: ILogoutProps = {
  title: '退出登录',
  backgroundColor: 'red',
  color: '#FFFFFF',
  url: '/pages/login/index',
};