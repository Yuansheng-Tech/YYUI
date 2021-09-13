import { ITabBarProps } from './index';

export const tabBarDataSource: ITabBarProps = {
  tabList: [
    { title: '水果', value: '0' },
    { title: '肉禽蛋', value: '1' },
    { title: '蔬菜', value: '2' },
  ],
  onClick: (data: any) => {
    console.log('onClick data', data);
  },
};
