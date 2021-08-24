import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';
import { AtGridProps } from 'taro-ui/types/grid';
import classnames from 'classnames';
export interface IProps {
  url?: string;
  height?: string;
  threeType?: 'left' | 'right' | 'top' | 'bottom' | undefined;
  hasBorder?: boolean;
  borderRadius?: string;
  imageMode?: keyof ImageProps.mode;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

export const YYGoodsThree = (props: IProps & AtGridProps) => {
  let {
    data = [],
    height,
    hasBorder,
    borderRadius = '0px',
    imageMode = 'widthFix',
    textAlign = 'left',
    threeType,
  } = props;
  console.log('YYGoodsThree data', data);
  return (
    <View
      className="yy-goods-three"
      style={{
        width: '100%',
        height,
      }}
      onClick={(event) => {
        console.log('YYGoodsGrid event', event);
      }}
    >
      {data.map((v, k) => {
        const { image, value } = v;
        return (
          <View
            key={k}
            className={classnames({
              'yy-goods-three-item': true,
              [`three-${threeType}-type`]: !!threeType,
            })}
            style={{
              border: hasBorder ? `1px solid #ddd` : 'none',
              borderRadius: borderRadius,
            }}
          >
            {image && <Image mode={imageMode || 'scaleToFill'} src={image} className="yy-goods-three-item-image" />}
            <Text
              className="yy-goods-three-item-title"
              style={{
                textAlign: textAlign || 'left',
              }}
            >
              {value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
