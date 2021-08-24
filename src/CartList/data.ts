import { ICartListProps } from './index';

export const cartListDataSource: ICartListProps = {
  list: [
    {
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '商品1',
      summary: '商品1',
      des: [],
      orderPrice: 10,
      num: 10,
      seleted: true,
    },
    {
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '商品2',
      summary: '商品2',
      des: [],
      orderPrice: 12,
      num: 1,
      seleted: false,
    },
  ],
};
