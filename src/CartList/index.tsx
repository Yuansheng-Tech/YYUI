import React from 'react';
import { AtList, AtSwipeAction } from 'taro-ui';
import { View, Text, Image } from '@tarojs/components';
import classnames from 'classnames';

import CartAdd from '../CartAdd/add';

import './index.scss';

export interface ICartItem {
  icon: string;
  name: string;
  summary: string;
  des?: [];
  orderPrice: number;
  num: number;
  seleted?: boolean;
}

export interface ICartListProps {
  list: ICartItem[]
}

export const YYCartList = (props: ICartListProps) => {
  const { list } = props
  return (<AtList className='yy-cart-list'>
    {list.map((item, index) => (
      <AtSwipeAction
        key={index}
        options={[
          {
            text: '删除',
            style: {
              backgroundColor: '#FF4949'
            }
          }
        ]}
        onClick={() => { 
          // onActionClick(item, index)
        }}>
        <View className='shop-item'>
          <View className='left flex'>
            <View onClick={() => {
              // onSeletedClick(item)
            }}>
              <Text className={classnames({
                "left-img1": true,
                "icono-circle": !item.seleted,
                "icono-checkCircle": item.seleted
              })}></Text>
            </View>
            {!!item.icon ?
              <Image className='left-img3' src={item.icon} /> :
              <Text className='img-left-image img-text'>{item.name}</Text>
            }
            <View className='des'>
              <View className='des1'>
                {item.name}
                {item.summary && (
                  <Text className='des1-1'>（{item.summary}）</Text>
                )}
              </View>
              <View className='des2'>
                {(item.des || []).length ? item.des.join('/') : ''}
              </View>
              <View className='des3'>
                {Number(item.orderPrice).toFixed(2)}
              </View>
            </View>
          </View>
          <View className='right'>
            <CartAdd
              step={1} min={1}
              valueNum={item.num}
              onGetValue={value => {
                // onGetValue(value, item)
              }}
            />
          </View>
        </View>
      </AtSwipeAction>
    ))}
  </AtList>)
}