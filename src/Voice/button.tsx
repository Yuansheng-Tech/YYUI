import React from 'react';
import Taro from '@tarojs/taro';
import { Button } from '@tarojs/components';

export const YYVoiceButton = () => {
  return (
    <Button
      onClick={() =>
        Taro.startRecord({
          success: function (res) {
            const tempFilePath = res.tempFilePath;
            console.log('tempFilePath', tempFilePath);
          },
        })
      }
    >
      开始录音
    </Button>
  );
};
