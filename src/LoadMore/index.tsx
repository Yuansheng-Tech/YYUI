import React from 'react';
import { AtLoadMore } from 'taro-ui';

export interface ILoadMoreProps {
  height?: string;
  moreText?: string;
  loadingText?: string;
  noMoreText?: string;
  moreBtnStyle?: string;
  noMoreTextStyle?: string;
}

export const YYLoadMore = (props: ILoadMoreProps) => {
  const { moreBtnStyle = {} } = props;
  const [status, setStatus] = React.useState('more') as ['more' | 'loading' | 'noMore', (data) => {}];
  const handleClick = () => {
    // 开始加载
    setStatus('loading');
    // 模拟异步请求数据
    // setTimeout(() => {
    //   // 没有更多了
    //   setStatus('noMore')
    // }, 2000)
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
