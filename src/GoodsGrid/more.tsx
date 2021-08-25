import React from 'react';
import { View } from '@tarojs/components';
import { useRootStore } from '@ysyp/stores';
import { YYLoadMore } from '../LoadMore';
import { IgoodsGridProps } from './index';
import { YYLoadGoodsGrid } from './load';

export const YYLoadMoreGoodsGrid = (props: IgoodsGridProps) => {
  const { skip = 0, take = 10 } = props;
  const { goodStore } = useRootStore();
  const [skipData, setSkipData] = React.useState(skip || 0);
  return (
    <View className="yy-goods-load-more-grid">
      <YYLoadGoodsGrid {...props} skip={skipData} />
      <YYLoadMore
        {...props}
        onClick={() => {
          console.log('YYLoadMore goodStore', goodStore.page, skipData, take);
          goodStore.setPage({
            take,
            skip: Number(skipData) + Number(take),
          });
          setSkipData(Number(skipData) + Number(take));
          return 'more';
        }}
      />
    </View>
  );
};
