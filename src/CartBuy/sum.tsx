import React from 'react';
import { View, Button, Text } from '@tarojs/components';
import classnames from 'classnames';

export interface ICartSumBuyProps {
  delivery_price?: number;
  total_price: number;
  buyText: string;
  onAddCart?: (e) => void;
  onBuy?: (e) => void;
}

export const YYCartSumBuy = (props: ICartSumBuyProps) => {
  const {
    delivery_price = '0.00',
    total_price = '0.00',
    buyText = '结算', // 去凑单
    onBuy,
  } = props;
  return (
    <View className="yy-cart-buy">
      <View className="yy-cart-money">
        <Text className="yy-cart-delivery_price">
          还差<Text className="_price"> ¥{delivery_price} </Text>起送
        </Text>
        <Text className="yy-cart-total_price">
          合计 <Text className="_price"> ¥{total_price} </Text>
        </Text>
      </View>
      {buyText && (
        <Button
          className={classnames({
            'yy-buy-btn': true,
          })}
          type="primary"
          onClick={onBuy}
        >
          {buyText}
        </Button>
      )}
    </View>
  );
};
