import { ICartBuyProps } from './index';

export const cartBuyDataSource: ICartBuyProps = {
  addCartText: '加入购物车',
  buyText: '立即购买',
  btnRadius: '40px',
  btnMargin: '10px',
  onAddCart: (e) => {
    console.log('e onAddCart', e);
  },
  onBuy: (e) => {
    console.log('e onBuy', e);
  },
};
