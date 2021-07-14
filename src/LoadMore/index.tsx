import React from 'react';
import { AtLoadMore } from 'taro-ui';

export interface ILoadMoreProps {
  height?: string;
  moreText?: string;
  loadingText?: string;
  noMoreText?: string;
  moreBtnStyle?: string;
  noMoreTextStyle?: string;
  onClick: (event) => 'more' | 'loading' | 'noMore';
}

export const YYLoadMore = (props: ILoadMoreProps) => {
  const { moreBtnStyle = {} } = props;
  const [status, setStatus] = React.useState('more') as ['more' | 'loading' | 'noMore', (data) => {}];
  const handleClick = async (e) => {
    // 开始加载
    setStatus('loading');
    const result = await props.onClick(e);
    setStatus(result);
  };
  return (
    <AtLoadMore
      {...props}
      moreBtnStyle={{
        border: 'none',
        ...moreBtnStyle,
      }}
      onClick={handleClick}
      status={status}
    />
  );
};
