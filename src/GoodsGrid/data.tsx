import { AtGridItem, AtGridProps } from 'taro-ui/types/grid';
import { tabsDataSource } from '../Tabs/data';
import { IgoodsGridProps } from './index';

export const goodsGridDataSource: IgoodsGridProps & AtGridProps = {
  // mode: 'square', // square rect
  goodUrl: '/goods',
  skip: 0,
  take: 10,
  hasBorder: true,
  borderRadius: '0px',
  backgroundColor: '#fff',
  type: 'imageLeft',
  inline: false,
  columnNum: 1,
  imageMode: 'scaleToFill',
  imageWidth: '100px',
  imageHeight: '100px',
  itemPadding: '5px',
  itemMargin: '5px',
  textAlign: 'left',
  cartImage: '',
  onClick: (item: AtGridItem, index: number) => {
    console.log('item index', item, index);
  },
  data: [
    {
      id: 'xxx1',
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '领取中心',
      price_min: 11.0,
      original_price: 12.0,
    },
    {
      id: 'xxx2',
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '找折扣',
      url: 'https://yuanshengyoupin.com',
      price_min: 11.0,
      original_price: 12.0,
    },
    {
      id: 'xxx3',
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '领会员',
      price_min: 11.0,
      original_price: 0,
    },
    {
      id: 'xxx4',
      icon: 'http://localhost:3333/static/memo/files/hb10.png',
      name: '新品首发',
      price_min: 0,
      original_price: 0,
    },
  ],
};

export const tabGoodsDataSource = {
  tabDirection: 'vertical',
  flexDirection: 'row',
  tabUrl: '/classifies',
  tabs: tabsDataSource,
  goodUrl: '/goods',
  goods: goodsGridDataSource,
};
