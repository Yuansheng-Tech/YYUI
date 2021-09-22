import { ICartBuyProps } from './index';
import { ICartSumBuyProps } from './sum';

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

export const cartSumBuyDataSource: ICartSumBuyProps = {
  delivery_price: 10,
  total_price: 22,
  buyText: '去凑单',
  onAddCart: (e) => {
    console.log('e onAddCart', e);
  },
  onBuy: (e) => {
    console.log('e onBuy', e);
  },
};
