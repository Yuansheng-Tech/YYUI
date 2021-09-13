import { AtGridItem, AtGridProps } from 'taro-ui/types/grid';
import { IProps } from './index';

export const goodsCardDataSource: IProps = {
  hasBorder: true,
  reverse: true,
  padding: '10px',
  flexDirection: true,
  height: 'auto',
  imageMode: 'scaleToFill',
  textAlign: 'center',
  data: {
    image: 'https://file.yuanshengyoupin.com/files/hb10.png',
    title: '领取中心',
    subtitle: '领取中心领取中心',
    price: '¥ 12 元',
    addCard: '加入购物车 >',
    learnMore: '查看详情 >',
    url: 'https://yuanshengyoupin.com',
  },
};
