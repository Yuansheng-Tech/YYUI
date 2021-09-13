import { AtImagePickerProps } from 'taro-ui/types/image-picker';
import { IImagePickerProps } from './index';

export const imagePickerDataSource: IImagePickerProps & AtImagePickerProps = {
  multiple: true,
  length: 3,
  mode: 'top',
  showAddBtn: true,
  count: 1,
  // sizeType: 100,
  files: [
    {
      url: 'https://file.yuanshengyoupin.com/files/hb10.png',
    },
    {
      url: 'https://file.yuanshengyoupin.com/files/hb10.png',
    },
    {
      url: 'https://file.yuanshengyoupin.com/files/hb10.png',
    },
  ],
  onChange: () => {},
};
