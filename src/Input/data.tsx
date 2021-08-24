import { IInputProps } from './index';

export const inputDataSource: IInputProps = {
  label: '标题',
  placeholder: '请输入标题',
  flexDirection: 'column',
  disabled: false,
  onInput: () => {
    console.log('Input');
  },
};
