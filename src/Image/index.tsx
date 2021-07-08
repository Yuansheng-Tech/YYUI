import React from 'react';
import { Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';
export interface IImageProps {
  src: string;
  mode?: keyof ImageProps.mode;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const YYImage = (props: IImageProps) => {
  const { src, mode = 'widthFix', width = '100%', height = 'initial', borderRadius = '0px' } = props;
  return (
    <Image
      className="yy-image img-view-img"
      style={{
        width,
        height,
        borderRadius,
      }}
      mode={mode}
      src={src}
    />
  );
};
