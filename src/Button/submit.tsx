import React, { useState } from 'react';
import { Button, ButtonProps, View } from '@tarojs/components';
import { AtToast } from "taro-ui"
import classnames from 'classnames';
import { RootStore } from '@ysyp/stores/dist/RootStore';
import { useRootStore } from '@ysyp/stores/dist/RootStoreProvider';
import { router } from '@ysyp/utils/dist/router';

export interface IButtonProps {
  title: string;
  url?: string;
  store?: keyof RootStore;
  fixBottom?: boolean;
  margin?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
}

export const YYSubmit = (props: IButtonProps & ButtonProps) => {
  const { 
    fixBottom=false, store = 'weappStore', title, url = '/pages/index/index', margin = '0px', borderRadius = '0px', ...btnProps
  } = props;
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('loading');
  const rootStore = useRootStore();
  return (
    <View
      style={{
        margin,
      }}
      className={classnames({
        'yy-button': true,
        'yy-button-bottom': fixBottom
      })}
    >
      <Button
        className='yy-button-btn'
        style={{
          borderRadius
        }}
        {...btnProps}
        onClick={async () => {
          if (store) {
            const stores = await rootStore[store].post(rootStore[store].data);
            console.log('stores', stores);
            if (!stores.error) {
              setStatus('success');
              setMessage(stores.message);
              
              setTimeout(() => {
                  router.switchTab({
                    url
                  });
              }, 3000)
            }
          }
        }}
      >
        {title}
      </Button>
      {/* @ts-ignore */}
      {!!message && <AtToast isOpened={!!message} text={message} status={status}></AtToast>}
    </View>
  );
};
