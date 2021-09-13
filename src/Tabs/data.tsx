import { AtTabsProps } from 'taro-ui/types/tabs';
import { ITabsProps } from './index';

export const tabsDataSource: ITabsProps & AtTabsProps = {
  store: 'classifyStore',
  tabUrl: '/classifies',
  take: 10,
  skip: 0,
  current: 0,
  tabDirection: 'horizontal',
  tabList: [
    { id: '1', name: '水果', value: '0', title: '水果' },
    { id: '2', name: '肉禽蛋', value: '1', title: '肉禽蛋' },
    { id: '3', name: '蔬菜', value: '2', title: '蔬菜' },
  ],
  onClick: (data: any) => {
    console.log('onClick data', data);
  },
};
