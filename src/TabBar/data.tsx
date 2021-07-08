import { ITabBarProps } from "./index";

export const tabBarDataSource: ITabBarProps = {
  tabList: [
    { title: '待办事项', value: '0' },
    { title: '拍照', value: '1' },
    { title: '通讯录', value: '2' }
  ],
  onClick: (data: any) => {
    console.log('onClick data', data)
  }
}