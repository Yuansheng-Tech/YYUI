import React from 'react';
import { Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';

export interface IImgProps {
  src: string;
  mode?: keyof ImageProps.mode;
  height?: string;
}

export const YYImg = (props: IImgProps) => {
  const { src, mode = 'widthFix', height } = props;
  return (
    <Image
      className="at-article__img"
      src={src}
      mode={mode}
      style={{
        height,
      }}
    />
  );
};
