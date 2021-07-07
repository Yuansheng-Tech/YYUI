import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image, RichText, Button } from '@tarojs/components'
import { router } from '@ysyp/utils'

import './index.scss'

export interface IContactProps {
  logo: string
  notice: string
  phone: string
  telImage: string
  wxImage: string
  margin?: string
  borderRadius?: string
}

export const YYContact = (props: IContactProps) => {
  const {
    logo,
    notice,
    phone,
    telImage,
    wxImage,
    margin,
    borderRadius
  } = props

  const getTel = () => {
    Taro.makePhoneCall({
      phoneNumber: phone
    })
  }


  const switchClick = (index) => {
    router.navigateTo({
        url: '/subPackages/pages/address/index?switchkey=' + index
    })
  }

  return (
    <View className='yy-concat' style={{
      margin,
      borderRadius
    }}>
      <Image className='yy-concat_logo' src={logo} onClick={() => this.switchClick(0)} />
      <View className='yy-concat_text'>
        <RichText nodes={notice} />
      </View>
      <View className='yy-concat_button'>
        <Image className='yy-btn_tel yy-concat_button-image' src={telImage} onClick={() => this.getTel()} />
        <Button className='yy-btn_wx_wrap' type='default' openType='contact' bindcontact={(e) => {
          // console.log(e.detail.path)
          // console.log(e.detail.query)
        }}
        ><Image className='yy-btn_wx yy-concat_button-image' src={wxImage} /></Button>
      </View>

    </View>
  )
}
