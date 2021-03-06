import { AtGridItem, AtGridProps } from 'taro-ui/types/grid';
import { IProps } from './index';

export const goodsThreeDataSource: IProps & AtGridProps = {
  // mode: 'square', // square rect
  hasBorder: false,
  borderRadius: '10px',
  height: '240px',
  imageMode: 'scaleToFill',
  textAlign: 'center',
  threeType: 'left',
  onClick: (item: AtGridItem, index: number) => {
    console.log('item index', item, index);
  },
  data: [
    {
      image: 'https://file.yuanshengyoupin.com/files/hb10.png',
      value: '领取中心',
      // iconInfo: '',
      url: 'https://yuanshengyoupin.com',
    },
    {
      image: 'https://file.yuanshengyoupin.com/files/hb10.png',
      value: '找折扣',
      url: 'https://yuanshengyoupin.com',
    },
    {
      image: 'https://file.yuanshengyoupin.com/files/hb10.png',
      value: '领会员',
    },
    {
      image: 'https://file.yuanshengyoupin.com/files/hb10.png',
      value: '领会员',
    },
  ],
};
