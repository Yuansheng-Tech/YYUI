import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image, RichText, Button } from '@tarojs/components';

export interface IContactProps {
  logo: string;
  notice: string;
  phone: string;
  wechat: string;
  telImage: string;
  wxImage: string;
  margin?: string;
  borderRadius?: string;
}

export const YYContact = (props: IContactProps) => {
  const { logo, notice, phone, wechat, telImage, wxImage, margin, borderRadius } = props;

  const getTel = () => {
    Taro.makePhoneCall({
      phoneNumber: phone,
    });
  };

  // const switchClick = (index) => {
  //   router.navigateTo({
  //       url: '/subPackages/pages/address/index?switchkey=' + index
  //   })
  // }
  return (
    <View
      className='yy-concat'
      style={{
        margin,
        borderRadius,
      }}
    >
      {logo && (
        <Image
          className='yy-concat_logo'
          src={logo}
          // onClick={() => {
          //   // switchClick(0)
          // }}
        />
      )}
      <View className='yy-concat_text'>
        <RichText nodes={notice} />
      </View>
      {(telImage || wxImage) && (
        <View className='yy-concat_button'>
          {telImage && <Image className='yy-btn_tel yy-concat_button-image' src={telImage} onClick={() => getTel()} />}
          {wxImage && (
            <Button
              className='yy-btn_wx_wrap'
              type='default'
              openType='contact'
              onClick={() => {
                if (process.env.TARO_ENV !== 'weapp') {
                  Taro.setClipboardData({
                    data: wechat,
                    complete: (res) => {
                      console.log('complete', res)
                    },
                    fail: (res) => {
                      (process.env.TARO_ENV !== 'kwai') && Taro.showToast({
                        title: '复制失败！',
                        icon: 'none',
                        duration: 2000
                      })
                    },
                    success: (res) => {
                      (process.env.TARO_ENV !== 'kwai') && Taro.showToast({
                        title: '复制成功！',
                        icon: 'none',
                        duration: 2000
                      })
                    },
                  })
                }
              }}
            >
              <Image className='yy-btn_wx yy-concat_button-image' src={wxImage} />
            </Button>
          )}
        </View>
      )}
    </View>
  );
};
