import React from 'react';
import { AtNoticebar } from 'taro-ui';
import { AtNoticeBarProps } from 'taro-ui/types/noticebar';

import './index.scss'

export interface INoticebarProps {
  title: string;
}

export const YYNoticebar = (props: INoticebarProps & AtNoticeBarProps) => {
  const {
    title,
    ...noticeProps
  } = props;
  return (<AtNoticebar
    {...noticeProps}>
  {title}
</AtNoticebar>);
}