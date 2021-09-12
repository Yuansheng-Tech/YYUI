import React from 'react';
import { Button as TaroButton, ButtonProps } from '@tarojs/components';

import Wrapper from './wrapper';

export const Button = (props: ButtonProps) => (
  <Wrapper>
    <TaroButton {...props} />
  </Wrapper>
);

export const taroButtonDataSource = {
  /**
   * 按钮的大小
   *
   * @default default
   * @supported weapp, h5, rn
   */
  size: 'default',

  /**
   * 按钮的样式类型
   *
   * @default default
   * @supported weapp, h5, rn
   */
  type: 'default',
};
