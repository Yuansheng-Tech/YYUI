import React from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import useSWR from 'swr';
import * as qs from 'qs';
import { fetcher } from '@ysyp/utils';
import { useRootStore } from '@ysyp/stores';

export const YYLoadGoodsGrid = (props: IgoodsGridProps) => {
  const { url, skip, take } = props;
  const { goodStore, classifyStore } = useRootStore();
  if (url) {
    const { data } = useSWR(
      `${url}?${qs.stringify(
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
    goodStore.setPage({
      take,
      skip: Number(skip) + Number(take),
    });
  }
  return <YYGoodsGrid {...props} data={goodStore.datas} />;
};
