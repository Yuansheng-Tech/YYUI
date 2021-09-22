import { IImageProps } from './index';
import { IImageListProps } from './list';

export const imageDataSource: IImageProps = {
  src: 'https://file.yuanshengyoupin.com/files/hb10.png',
  mode: 'widthFix',
  width: '100%',
  height: '100px',
  borderRadius: '10px',
};

export const imageListDataSource: IImageListProps = {
  flexDirection: 'row',
  data: [imageDataSource, imageDataSource],
};
