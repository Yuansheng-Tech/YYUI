import { AtGridProps } from 'taro-ui/types/grid';

export const gridDataSource: AtGridProps = {
  mode: 'square', // square rect
  hasBorder: true,
  columnNum: 3,
  onClick: (item: object, index: number) => {
    console.log('item index', item, index);
  },
  data: [
    {
      image: 'http://localhost:3333/static/memo/files/hb10.png',
      value: '领取中心',
      // iconInfo: '',
      url: 'https://yuanshengyoupin.com',
    },
    {
      image: 'http://localhost:3333/static/memo/files/hb10.png',
      value: '找折扣',
      url: 'https://yuanshengyoupin.com',
    },
    {
      image: 'http://localhost:3333/static/memo/files/hb10.png',
      value: '领会员',
    },
    {
      image: 'http://localhost:3333/static/memo/files/hb10.png',
      value: '新品首发',
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '领京豆',
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '手机馆',
    },
  ],
};
