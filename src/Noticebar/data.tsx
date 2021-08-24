import { AtNoticeBarProps } from 'taro-ui/types/noticebar';
import { INoticebarProps } from './index';

export const noticebarDataSource: INoticebarProps & AtNoticeBarProps = {
  title: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
  icon: 'volume-plus',
  marquee: true,
};
