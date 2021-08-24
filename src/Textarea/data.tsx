import { ITextareaProps } from './index';

export const textareaDataSource: ITextareaProps = {
  label: '标题',
  placeholder: '请输入标题',
  flexDirection: 'column',
  disabled: false,
  onInput: () => {
    console.log('textarea');
  },
};
