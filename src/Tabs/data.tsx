import { AtTabsProps } from "taro-ui/types/tabs";
import { ITabsProps } from "./index";

export const tabsDataSource: ITabsProps & AtTabsProps = {
  url: '',
  current: 0,
  tabDirection: 'horizontal',
  tabList: [
    { title: '待办事项', value: '0' },
    { title: '拍照', value: '1' },
    { title: '通讯录', value: '2' }
  ],
  onClick: (data: any) => {
    console.log('onClick data', data)
  }
}