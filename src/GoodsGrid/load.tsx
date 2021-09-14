import React, { createContext, useContext } from 'react';
import { IgoodsGridProps, YYGoodsGrid } from './index';
import * as qs from 'qs';
import { useQuery } from '@ysyp/utils/dist/useQuery';
import { RootStore } from '@ysyp/stores/dist/RootStore';

export const YYLoadGoodsGrid = (props: IgoodsGridProps) => {
  const { goodUrl = '', skip = 0, take = 10 } = props;
  const { goodStore, classifyStore } = useContext(createContext(new RootStore()));
  if (goodUrl) {
    const { data, error } = useQuery(
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
    const { data: queryData = [] } = data || {};
    goodStore.setDatas(queryData);
  }
  return <YYGoodsGrid {...props} data={goodStore.datas} />;
};
