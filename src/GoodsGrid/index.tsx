import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';
import { AtGridItem } from 'taro-ui/types/grid';
import classnames from 'classnames';
import { router } from '@ysyp/utils/dist/router';

const cartSvg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnCmNsYXNzPSJpY29uIgp2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Igp2ZXJzaW9uPSIxLjEiCnhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKcC1pZD0iMTI0OSIKd2lkdGg9IjE2IgpoZWlnaHQ9IjE2Ij4KICA8cGF0aAogICAgZD0iTTg4Ny40NjY2NjcgNzE2LjhIMzkyLjUzMzMzM2MtNzEuNjggMC0xMzkuOTQ2NjY3LTUxLjItMTUzLjYtMTE2LjA1MzMzM0wxNTcuMDEzMzMzIDY4LjI2NjY2N0gzNC4xMzMzMzNjLTEwLjI0IDAtMTcuMDY2NjY3LTYuODI2NjY3LTE3LjA2NjY2Ni0xNy4wNjY2NjdTMjMuODkzMzMzIDM0LjEzMzMzMyAzNC4xMzMzMzMgMzQuMTMzMzMzaDEzNi41MzMzMzRjNi44MjY2NjcgMCAxNy4wNjY2NjcgNi44MjY2NjcgMTcuMDY2NjY2IDEzLjY1MzMzNGw4NS4zMzMzMzQgNTQ2LjEzMzMzM2MxMC4yNCA0Ny43ODY2NjcgNjQuODUzMzMzIDg4Ljc0NjY2NyAxMTkuNDY2NjY2IDg4Ljc0NjY2N0g4ODcuNDY2NjY3YzEwLjI0IDAgMTcuMDY2NjY3IDYuODI2NjY3IDE3LjA2NjY2NiAxNy4wNjY2NjZzLTYuODI2NjY3IDE3LjA2NjY2Ny0xNy4wNjY2NjYgMTcuMDY2NjY3eiIKICAgIGZpbGw9IiNlNjBiMzAiCiAgICBwLWlkPSIxMjUwIj4KICA8L3BhdGg+CiAgPHBhdGgKICAgIGQ9Ik04NTMuMzMzMzMzIDU0Ni4xMzMzMzNIMjU2Yy0xMC4yNCAwLTE3LjA2NjY2Ny02LjgyNjY2Ny0xNy4wNjY2NjctMTcuMDY2NjY2czYuODI2NjY3LTE3LjA2NjY2NyAxNy4wNjY2NjctMTcuMDY2NjY3SDg1My4zMzMzMzNjMjcuMzA2NjY3IDAgNjQuODUzMzMzLTEzLjY1MzMzMyA2OC4yNjY2NjctNTEuMkw5NjkuMzg2NjY3IDIwNC44SDIwNC44Yy0xMC4yNCAwLTE3LjA2NjY2Ny02LjgyNjY2Ny0xNy4wNjY2NjctMTcuMDY2NjY3UzE5NC41NiAxNzAuNjY2NjY3IDIwNC44IDE3MC42NjY2NjdoNzg1LjA2NjY2N2MzLjQxMzMzMyAwIDEwLjI0IDMuNDEzMzMzIDEzLjY1MzMzMyA2LjgyNjY2NnMzLjQxMzMzMyAxMC4yNCAzLjQxMzMzMyAxMy42NTMzMzRMOTU1LjczMzMzMyA0NjcuNjI2NjY3Yy02LjgyNjY2NyA0NC4zNzMzMzMtNDcuNzg2NjY3IDc4LjUwNjY2Ny0xMDIuNCA3OC41MDY2NjZ6TTM3NS40NjY2NjcgOTg5Ljg2NjY2N2MtNjQuODUzMzMzIDAtMTE5LjQ2NjY2Ny01NC42MTMzMzMtMTE5LjQ2NjY2Ny0xMTkuNDY2NjY3UzMxMC42MTMzMzMgNzUwLjkzMzMzMyAzNzUuNDY2NjY3IDc1MC45MzMzMzNzMTE5LjQ2NjY2NyA1NC42MTMzMzMgMTE5LjQ2NjY2NiAxMTkuNDY2NjY3UzQ0MC4zMiA5ODkuODY2NjY3IDM3NS40NjY2NjcgOTg5Ljg2NjY2N3ogbTAtMjA0LjhjLTQ3Ljc4NjY2NyAwLTg1LjMzMzMzMyAzNy41NDY2NjctODUuMzMzMzM0IDg1LjMzMzMzM1MzMjcuNjggOTU1LjczMzMzMyAzNzUuNDY2NjY3IDk1NS43MzMzMzNzODUuMzMzMzMzLTM3LjU0NjY2NyA4NS4zMzMzMzMtODUuMzMzMzMzUzQyMy4yNTMzMzMgNzg1LjA2NjY2NyAzNzUuNDY2NjY3IDc4NS4wNjY2Njd6TTc4NS4wNjY2NjcgOTg5Ljg2NjY2N2MtNjQuODUzMzMzIDAtMTE5LjQ2NjY2Ny01NC42MTMzMzMtMTE5LjQ2NjY2Ny0xMTkuNDY2NjY3UzcyMC4yMTMzMzMgNzUwLjkzMzMzMyA3ODUuMDY2NjY3IDc1MC45MzMzMzNzMTE5LjQ2NjY2NyA1NC42MTMzMzMgMTE5LjQ2NjY2NiAxMTkuNDY2NjY3Uzg0OS45MiA5ODkuODY2NjY3IDc4NS4wNjY2NjcgOTg5Ljg2NjY2N3ogbTAtMjA0LjhjLTQ3Ljc4NjY2NyAwLTg1LjMzMzMzMyAzNy41NDY2NjctODUuMzMzMzM0IDg1LjMzMzMzM1M3MzcuMjggOTU1LjczMzMzMyA3ODUuMDY2NjY3IDk1NS43MzMzMzNzODUuMzMzMzMzLTM3LjU0NjY2NyA4NS4zMzMzMzMtODUuMzMzMzMzUzgzMi44NTMzMzMgNzg1LjA2NjY2NyA3ODUuMDY2NjY3IDc4NS4wNjY2Njd6IgogICAgZmlsbD0iI2U2MGIzMCIKICAgIHAtaWQ9IjEyNTEiPgogIDwvcGF0aD4KPC9zdmc+';

export interface IgoodsGridProps {
  goodUrl?: string;
  take?: number;
  skip?: number;
  inline?: boolean;
  type?: 'imageTop' | 'imageLeft';
  backgroundColor?: string;
  hasBorder?: boolean;
  borderRadius?: string;
  columnNum?: number;
  imageMode?: keyof ImageProps.mode;
  imageWidth?: string;
  imageHeight?: string;
  itemPadding?: string;
  itemMargin?: string;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  // price?: number;
  // originalPrice?: number;
  data?: {
    id: string;
    icon: string;
    name?: string;
    // iconInfo?: string;
    url?: string;
    price_min?: number;
    original_price?: number;
  }[];
  cartImage?: string;
  onClick?: (val: AtGridItem, index?: number) => void;
  style?: object;
}

export const YYGoodsGrid = (props: IgoodsGridProps) => {
  const {
    type,
    data = [],
    inline,
    backgroundColor,
    hasBorder,
    borderRadius = '0px',
    columnNum = 1,
    imageMode = 'widthFix',
    imageWidth = '100%',
    imageHeight = '100px',
    textAlign = 'left',
    itemPadding = '10px',
    itemMargin = '10px',
    cartImage = cartSvg,
    onClick,
  } = props;

  return (
    <View
      className="yy-goods-grid"
      style={
        inline
          ? {
              display: 'flex',
              flexDirection: 'row',
              backgroundColor,
            }
          : {
              width: '100%',
              overflow: 'hidden',
              backgroundColor,
            }
      }
    >
      {data.map((v, k) => {
        const { id: url, icon: image, name: value, price_min: price, original_price: originalPrice } = v;
        return (
          <View
            key={k}
            onClick={() => {
              url &&
                (onClick
                  ? onClick({
                      url,
                    })
                  : router.navigateTo({
                      url,
                    }));
            }}
            className={classnames({
              'yy-goods-item': true,
              [`yy-goods-${type}-type`]: !!type,
            })}
            style={{
              border: hasBorder ? `1px solid #ddd` : 'none',
              width: inline
                ? `calc(${imageWidth} + 10px)`
                : `calc(${100 / columnNum}% - ${itemMargin} - ${itemMargin})`,
              float: 'left',
              borderRadius: borderRadius,
              padding: itemPadding,
              margin: itemMargin,
            }}
          >
            <View
              className="yy-goods-item-left"
              style={{
                width: type === 'imageLeft' ? imageWidth : 'initial',
              }}
            >
              {/* {image && ( */}
              <Image
                mode={imageMode || 'scaleToFill'}
                src={image}
                className="yy-goods-item-image"
                style={{
                  width: imageWidth,
                  height: imageHeight,
                }}
              />
              {/* )} */}
            </View>
            <View
              className="yy-goods-item-desc"
              style={{
                height: type === 'imageLeft' ? imageHeight : 'initial',
                width: type === 'imageLeft' ? `calc(100% - ${imageWidth} - 10px)` : 'initial',
                marginLeft: type === 'imageLeft' ? '10px' : 'initial',
              }}
            >
              <Text
                className="yy-goods-item-title"
                style={{
                  textAlign: textAlign || 'left',
                }}
              >
                {value}
              </Text>
              {!!price && (
                <View className="yy-goods-prices">
                  <Text className="yy-goods-price">??{price}</Text>
                  {!!originalPrice && <Text className="yy-goods-original-price">??{originalPrice}</Text>}
                  <Text className="yy-goods-cart">
                    <Image
                      src={cartImage}
                      style={{
                        width: '16px',
                        height: '16px',
                      }}
                    />
                  </Text>
                </View>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};
