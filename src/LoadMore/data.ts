import { ILoadMoreProps } from "./index";

export const loadMoreDataSource: ILoadMoreProps = {
  height: '40px',
  moreText: '加载更多',
  loadingText: '加载中',
  noMoreText: '～我也是有底线的～',
  moreBtnStyle: '',
  noMoreTextStyle: '',
  onClick: (data) => {
    return 'more'
  }
}