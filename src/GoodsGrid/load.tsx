import React from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import useSWR from 'swr';
import { fetcher } from '@ysyp/utils';
import { useRootStore } from '@ysyp/stores';

export const YYLoadGoodsGrid = (props: IgoodsGridProps) => {
  const { url, skip, take } = props;
  const { goodStore } = useRootStore();
  if (url) {
    const { data, error } = useSWR(`${url}?take=${take}&skip=${skip}`, (url) => fetcher(url));
    const { data: queryData = [] } = data || {};
    goodStore.setDatas(queryData);
    goodStore.setPage({
      take,
      skip: Number(skip) + Number(take),
    });
  }
  return <YYGoodsGrid {...props} data={goodStore.datas} />;
};
