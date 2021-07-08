import React from 'react';
import { View, Text } from '@tarojs/components';

export interface ICouponProps {
  color: string;
  bgColor: string;
  borderColor: string;

  data: {
    id: string;
    symbol: string;
    number: number;
    label: string;

    title: string;
    subtitle: string;
    actionLabel: string;
  }[];
}

export const YYCoupon = (props: ICouponProps) => {
  const {
    color = 'rgb(255, 131, 11)',
    bgColor = 'rgb(255, 245, 225)',
    borderColor = 'rgb(255, 131, 11)',
    data = [],
  } = props;
  const onHandleClick = (id: string) => {
    console.log('id', id);
  };
  return (
    <View
      className="yy-coupon"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {data.map((v, k) => {
        const { id, symbol = '¥', number, label, title, subtitle, actionLabel = '领取' } = v;
        return (
          <View
            key={k}
            className="yy-coupon-item"
            style={{
              color: color,
            }}
          >
            <View
              className="yy-coupon-left"
              style={{
                borderColor: borderColor,
              }}
            >
              <View className="yy-coupon-price">
                <Text className="yy-coupon-price-symbol">{symbol}</Text>
                <Text className="yy-coupon-price-number">{number}</Text>
              </View>
              <Text className="yy-coupon-price-label">{label}</Text>
            </View>
            <View className="yy-coupon-middle">
              <View className="yy-coupon-middle-top"></View>
              <View className="yy-coupon-middle-bottom"></View>
              <View className="yy-coupon-middle-center">
                <View className="yy-coupon-middle-a"></View>
                <View
                  className="yy-coupon-middle-b"
                  style={{
                    borderColor: borderColor,
                  }}
                ></View>
                <View
                  className="yy-coupon-middle-c"
                  style={{
                    borderColor: borderColor,
                  }}
                ></View>
              </View>
            </View>
            <View className="yy-coupon-right">
              <View className="yy-coupon-right-content">
                <Text className="yy-coupon-right-title">{title}</Text>
                <Text className="yy-coupon-right-subtitle">{subtitle}</Text>
              </View>
              <View className="yy-coupon-right-action" onClick={() => onHandleClick(id)}>
                {actionLabel}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
