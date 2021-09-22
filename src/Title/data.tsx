import { ITitleProps } from './index';
import { ICartTitleProps } from './cart';

export const titleDataSource: ITitleProps = {
  icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
  title: '主标题',
  fontSize: '14px',
  padding: '10px',
  onClick: () => {},
};

export const subTitleDataSource: ITitleProps = {
  icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
  title: '主标题',
  subTitle: '副标题',
  more: '查看更多',
  url: 'https://yuanshengyoupin.com',
  fontSize: '14px',
  padding: '10px',
  onClick: () => {},
};

export const cartTitleDataSource: ICartTitleProps = {
  icon: 'http://file.yuansheng.com/static/memo/logos/19151604.png',
  title: '主标题',
  subTitle: '副标题',
  more: '〉',
  url: 'https://yuanshengyoupin.com',
  fontSize: '14px',
  padding: '10px',
  deleteIcon: true,
};
