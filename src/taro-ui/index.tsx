import React from 'react'
import { 
  Button as TaroButton,
  ButtonProps
} from '@tarojs/components'

import Wrapper from './wrapper';

export const Button =  (props: ButtonProps) => <Wrapper>
  <TaroButton {...props} />
</Wrapper>

export const taroButtonDataSource = {
  /** 按钮的大小
   * @supported weapp, h5, rn
   * @default default
   */
   size: 'default',

   /** 按钮的样式类型
    * @supported weapp, h5, rn
    * @default default
    */
   type: 'default',
 
}

