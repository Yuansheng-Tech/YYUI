import React from 'react';
import { View } from '@tarojs/components';
import { YYLoadMore } from '../LoadMore';
import { IgoodsGridProps } from './index';
import { YYLoadGoodsGrid } from './load';

export const YYLoadMoreGoodsGrid = (props: IgoodsGridProps) => {
  const { skip, take } = props;
  const [skipData, setSkipData] = React.useState(skip || 0);
  return (
    <View className="yy-goods-load-more-grid">
      <YYLoadGoodsGrid {...props} skip={skipData} />
      <YYLoadMore
        {...props}
        onClick={() => {
          setSkipData(Number(skipData) + Number(take));
          return 'more';
        }}
      />
    </View>
  );
};
