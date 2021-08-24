import { ILocationSwitchProps } from './index';

export const locationSwitchDataSource: ILocationSwitchProps = {
  margin: '10px',
  borderRadius: '10px',
  locationImage: 'https://file.biji77.com/wechat/icon/location.png',
  shop: {
    name: 'Shop Name',
    status: '营业中',
    distanceSpace: 10,
  },
  address: {
    area: '湖北',
    city: '武汉',
    full_address: '江夏区藏龙岛',
    contacts: '付引',
    phone: '17610340225',
  },
  buttonHide: false,
  switchLists: [
    {
      name: '自取',
      value: 'self_pick',
      url: '',
      isChecked: false,
    },
    {
      name: '外卖',
      value: 'take_out',
      url: '',
      isChecked: true,
    },
  ],
};
