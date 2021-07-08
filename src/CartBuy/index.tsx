import React from 'react';
import { View, Button } from '@tarojs/components';
import classnames from 'classnames';

export interface ICartBuyProps {
  addCartText?: string;
  buyText?: string;
  btnRadius?: string;
  btnMargin?: string;
  onAddCart?: (e) => void;
  onBuy?: (e) => void;
}

export const YYCartBuy = (props: ICartBuyProps) => {
  const {
    addCartText = '加入购物车',
    buyText = '立即购买',
    btnRadius = '50%',
    btnMargin = '10px',
    onAddCart,
    onBuy,
  } = props;
  return (
    <View className="yy-cart-buy" style={{}}>
      {addCartText && (
        <Button
          className={classnames({
            'yy-cart-btn': true,
          })}
          style={{
            borderRadius: btnRadius,
            margin: btnMargin,
          }}
          type="primary"
          plain={true}
          onClick={onAddCart}
        >
          {addCartText}
        </Button>
      )}
      <View></View>
      {buyText && (
        <Button
          className={classnames({
            'yy-buy-btn': true,
          })}
          style={{
            borderRadius: btnRadius,
            margin: btnMargin,
          }}
          type="primary"
          onClick={onBuy}
        >
          {buyText}
        </Button>
      )}
    </View>
  );
};
