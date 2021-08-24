import React, { createContext, useContext } from 'react';
import { View } from '@tarojs/components';
import { RootStore } from '@ysyp/stores';
import { YYLoadMore } from '../LoadMore';
import { IgoodsGridProps } from './index';
import { YYLoadGoodsGrid } from './load';

export const YYLoadMoreGoodsGrid = (props: IgoodsGridProps) => {
  const { skip = 0, take = 10 } = props;
  const { goodStore } = useContext(createContext(new RootStore())); // useRootStore();
  // const [skipData, setSkipData] = React.useState(skip || 0);
  return (
    <View className="yy-goods-load-more-grid">
      <YYLoadGoodsGrid {...props} skip={skip} />
      <YYLoadMore
        {...props}
        onClick={() => {
          console.log('YYLoadMore goodStore', goodStore.page, skip, take);
          goodStore.setPage({
            take,
            skip: Number(skip) + Number(take),
          });
          // setSkipData(Number(skip) + Number(take));
          return 'more';
        }}
      />
    </View>
  );
};
