import React, { createContext, useContext } from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import useSWR from 'swr';
import * as qs from 'qs';
import { fetcher } from '@ysyp/utils/src/fetcher';
import { RootStore } from '@ysyp/stores/src/RootStore';

export const YYLoadGoodsGrid = (props: IgoodsGridProps) => {
  const { goodUrl = '', skip = 0, take = 10 } = props;
  const { goodStore, classifyStore } = useContext(createContext(new RootStore()));
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
};
