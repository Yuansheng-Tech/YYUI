import { AtGridItem, AtGridProps } from 'taro-ui/types/grid';
import { IProps } from './index';

export const goodsGridDataSource: IProps & AtGridProps = {
  // mode: 'square', // square rect
  url: '',
  hasBorder: true,
  borderRadius: '0px',
  backgroundColor: '#fff',
  type: 'imageLeft',
  inline: false,
  columnNum: 2,
  imageMode: 'scaleToFill',
  imageWidth: '60px',
  imageHeight: '60px',
  itemPadding: '5px',
  itemMargin: '5px',
  textAlign: 'left',
  cartImage: '',
  onClick: (item: AtGridItem, index: number) => {
    console.log('item index', item, index)
  },
  data: [
      {
        image: 'http://localhost:3333/static/memo/files/hb10.png',
        value: '领取中心',
        // iconInfo: '',
        url: 'https://yuanshengyoupin.com',
        price: 11.00,
        originalPrice: 12.00
      },
      {
        image: 'http://localhost:3333/static/memo/files/hb10.png',
        value: '找折扣',
        url: 'https://yuanshengyoupin.com',
        price: 11.00,
        originalPrice: 12.00
      },
      {
        image: 'http://localhost:3333/static/memo/files/hb10.png',
        value: '领会员',
        price: 11.00,
        originalPrice: 0
      },
      {
        image: 'http://localhost:3333/static/memo/files/hb10.png',
        value: '新品首发',
        price: 0,
        originalPrice: 0
      }
    ]
}