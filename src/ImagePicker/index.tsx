import React from 'react';
import { AtImagePicker } from 'taro-ui';
import { AtImagePickerProps } from 'taro-ui/types/image-picker';

import './index.scss'

export interface IImagePickerProps {
  
}

export const YYImagePicker = (props: AtImagePickerProps & IImagePickerProps) => {
  const { files } = props
  const [filesState, setFilesState] = React.useState(files || [])

  const onChange = (files) => {
    setFilesState(files)
  }
  const onFail = (mes) => {
    console.log(mes)
  }
  const onImageClick = (index, file) => {
    console.log(index, file)
  }

  return (<AtImagePicker
    files={filesState}
    onChange={onChange}
    onFail={onFail}
    onImageClick={onImageClick}
  />);
}