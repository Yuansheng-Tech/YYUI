import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';
import { router } from '@ysyp/utils/dist/router';
import classnames from 'classnames';

export interface IProps {
  url?: string;
  height?: string;
  reverse?: boolean;
  hasBorder?: boolean;
  padding?: string;
  flexDirection?: boolean;
  borderRadius?: string;
  imageMode?: keyof ImageProps.mode;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  data: {
    image: string;
    title: string;
    subtitle?: string;
    price?: string;
    addCard?: string;
    learnMore?: string;
    url?: string;
  };
  style?: object;
}

export const YYGoodsCard = (props: IProps) => {
  let {
    height,
    hasBorder,
    padding = '0px',
    flexDirection = 'rows',
    imageMode = 'widthFix',
    textAlign = 'left',
    data,
    style = {},
    reverse = false,
  } = props;
  const { image, title, subtitle, price, addCard, learnMore, url } = data;
  const renderData = [
    <View className="yy-goods-card-imgview">
      <Image mode={imageMode || 'scaleToFill'} src={image} className="yy-goods-card-image" />
    </View>,
    <View className="yy-goods-card-content">
      <View className="yy-goods-card-title">{title}</View>
      {subtitle && <View className="yy-goods-card-subtitle">{subtitle}</View>}
      {price && <View className="yy-goods-card-price">{price}</View>}
      <View className="yy-goods-card-addmore">
        {addCard && <Text className="yy-goods-card-addcard">{addCard}</Text>}
        {learnMore && (
          <Text
            className="yy-goods-card-learnmore"
            onClick={() =>
              url &&
              router.navigateTo({
                url,
              })
            }
          >
            {learnMore}
          </Text>
        )}
      </View>
    </View>,
  ];
  return (
    <View
      className="yy-goods-card"
      style={{
        height,
        border: hasBorder ? `1px solid #ddd` : 'none',
        padding,
        textAlign: textAlign || 'left',
        flexDirection: flexDirection ? 'column' : 'row',
        ...style,
      }}
    >
      {!reverse && renderData.map((v, k) => <View key={k}>{v}</View>)}
      {reverse && renderData.reverse().map((v, k) => <View key={k}>{v}</View>)}
    </View>
  );
};
