import React, { createContext, useContext } from 'react';
import * as qs from 'qs';

import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
import { useQuery } from '@ysyp/utils/dist/useQuery';

export interface IFetchContainerProps {
  store: keyof RootStore;
  url: string;
  take?: number;
  skip?: number;
  children: React.ReactNode;
}

export const YYFecthContainer = (props: IFetchContainerProps) => {
  const { store, url = '', skip = 0, take = 10, children = null } = props;
  const rootStore = useRootStore();
  let queryData = {};
  if (url) {
    const {
      data = [],
      loaded,
      loading,
    } = useQuery(
      {
        url: take
          ? `${url}?${qs.stringify(
              Object.assign({
                take,
                skip,
              })
            )}`
          : url,
      },
      {}
    );
    store && rootStore[store].setDatas(queryData);
  }

  return <>{children}</>;
};
