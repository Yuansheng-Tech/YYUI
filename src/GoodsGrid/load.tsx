import React, { createContext, useContext } from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import * as qs from 'qs';
import { useQuery } from '@ysyp/utils/dist/useQuery';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';

export const YYLoadGoodsGrid = (props: IgoodsGridProps) => {
  const { goodUrl = '', skip = 0, take = 10 } = props;
  const { goodStore, classifyStore } = useRootStore();
  if (goodUrl) {
    const {
      data: queryData = [],
      loaded,
      loading,
    } = useQuery(
      {
        url: `${goodUrl}?${qs.stringify(
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
      },
      {}
    );
    goodStore.setDatas(queryData);
  }
  return <YYGoodsGrid {...props} data={goodStore.datas} />;
};
