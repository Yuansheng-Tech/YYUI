import { AtTabsProps } from 'taro-ui/types/tabs';
import { ITabsProps } from './index';

export const tabsDataSource: ITabsProps & AtTabsProps = {
  store: 'classifyStore',
  url: '/classifies',
  take: 10,
  skip: 0,
  current: 0,
  tabDirection: 'horizontal',
  tabList: [
    { id: '1', name: '待办事项', value: '0', title: '待办事项' },
    { id: '2', name: '拍照', value: '1', title: '拍照' },
    { id: '3', name: '通讯录', value: '2', title: '通讯录' },
  ],
  onClick: (data: any) => {
    console.log('onClick data', data);
  },
};
