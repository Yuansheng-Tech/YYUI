import { IShopItem } from './item';
import { IShopList } from './list';

import { IShopWithGoodsItem } from './itemWithGoods';
import { IShopWithGoodsList } from './listWithGoods';
import { IShopItemTop } from './itemTop';

export const shopItemTopDataSource: IShopItemTop = {
  backgroundColor: '#000',
  color: '#fff',
  id: '1',
  icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
  dilivery_start_price: '20',
  dilivery_price: '1',
  distanceTime: 30,
  notice: '关闭店铺了',
};

export const shopWithGoodsItemDataSource: IShopWithGoodsItem = {
  id: '1',
  icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
  name: 'materiel 1',
  status: '关店',
  start_time: '09:30',
  end_time: '9:30',
  distanceSpace: 3,
  total_sale: '3000',
  dilivery_start_price: '20',
  dilivery_price: '1',
  distanceTime: 30,
};

export const shopWithGoodsListDataSource: IShopWithGoodsList = {
  backgroundColor: '#eee',
  data: [
    {
      id: '1',
      icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
      name: 'materiel 1',
      status: '关店',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
      total_sale: '3000',
      dilivery_start_price: '20',
      dilivery_price: '1',
      distanceTime: 30,
      goods: [
        {
          id: '1',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
        {
          id: '2',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
        {
          id: '3',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
      ],
    },
    {
      id: '2',
      icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
      name: 'materiel 2',
      status: '营业中',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
      total_sale: '3000',
      dilivery_start_price: '20',
      dilivery_price: '1',
      distanceTime: 30,
      goods: [
        {
          id: '1',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
        {
          id: '2',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
        {
          id: '3',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
        {
          id: '4',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
      ],
    },
    {
      id: '3',
      icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
      name: 'materiel 3',
      status: '打烊',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
      total_sale: '3000',
      dilivery_start_price: '20',
      dilivery_price: '1',
      distanceTime: 30,
      goods: [
        {
          id: '1',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: '22.00',
        },
        {
          id: '2',
          icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
          name: '商品1',
          price: 20.0,
          original_price: 22.0,
        },
      ],
    },
  ],
};

export const shopItemDataSource: IShopItem = {
  id: '1',
  name: 'materiel 1',
  status: '关店',
  address: '湖北省武汉市江夏区藏龙岛银河湾',
  start_time: '09:30',
  end_time: '9:30',
  distanceSpace: 3,
};

export const shopListDataSource: IShopList = {
  backgroundColor: '#eee',
  data: [
    {
      id: '1',
      name: 'materiel 1',
      status: '关店',
      address: '湖北省武汉市江夏区藏龙岛银河湾',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
    },
    {
      id: '2',
      name: 'materiel 2',
      status: '营业中',
      address: '湖北省武汉市江夏区藏龙岛银河湾',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
    },
    {
      id: '3',
      name: 'materiel 3',
      status: '打烊',
      address: '湖北省武汉市江夏区藏龙岛银河湾',
      start_time: '09:30',
      end_time: '9:30',
      distanceSpace: 3,
    },
  ],
};
