import React from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import useSWR from 'swr';
import * as qs from 'qs';
import { fetcher } from '@ysyp/utils';
import { useRootStore } from '@ysyp/stores';
import { observer } from 'mobx-react-lite';

export const YYLoadGoodsGrid = observer((props: IgoodsGridProps) => {
  const { goodUrl = '', skip = 0, take = 10 } = props;
  const { goodStore, classifyStore } = useRootStore();
  if (goodUrl) {
    const { data } = useSWR(
      `${goodUrl}?${qs.stringify(
        Object.assign(
          {
            take,
            skip,
          },
          classifyStore.data.id
            ? {
                classify: {
                  id: classifyStore.data.id,
                },
              }
            : {}
        )
      )}`,
      (url) => fetcher(url)
    );
    const { data: queryData = [] } = data || {};
    goodStore.setDatas(queryData);
  }
  return <YYGoodsGrid {...props} data={goodStore.datas} />;
});
