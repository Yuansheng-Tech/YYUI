import { IAddProps } from './add';
import { ICartAddProps } from './index';

export const cartAddDataSource: ICartAddProps & IAddProps = {
  title: '数量',
  subTitle: '一件起购',

  valueNum: 1,
  stock: 10,
  step: 1,
  min: 1,
  onGetValue: (val: number) => {
    console.log('onGetValue', val);
  },
};
