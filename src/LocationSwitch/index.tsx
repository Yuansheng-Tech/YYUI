import React, { useState } from 'react';
import { View, Image, Text } from '@tarojs/components';
export interface ILocationSwitchProps {
  margin?: string;
  borderRadius?: string;
  locationImage: string;
  shop: {
    name: string;
    status: string;
    distanceSpace: number;
  };
  address: {
    area: string;
    city: string;
    full_address: string;
    contacts: string;
    phone: string;
  };
  buttonHide: boolean;

  switchLists?: {
    name: string;
    value: string;
    url: string;
    isChecked: boolean;
  }[];
}

export const YYLocationSwitch = (props: ILocationSwitchProps) => {
  console.log('YYLocationSwitch props', props);
  const {
    margin = '0px',
    borderRadius = '0px',
    locationImage,
    shop,
    address,
    buttonHide = true,
    switchLists = [
      {
        name: '自取',
        value: 'self_pick',
        url: '',
        isChecked: true,
      },
      {
        name: '外卖',
        value: 'take_out',
        url: '',
        isChecked: false,
      },
    ],
  } = props;

  return (
    <View
      className="yy-location-main"
      style={{
        margin,
        borderRadius,
      }}
    >
      <Image
        className="yy-address"
        src={locationImage}
        onClick={() => {
          // this.switchClick(1)
        }}
      />
      <View className="yy-address_text">
        {shop && (
          <>
            <View className="yy-address_del">
              {shop.name} ({shop.status}){' '}
            </View>
            <View className="yy-address_len">{`距离您${shop.distanceSpace || 0}公里`}</View>
          </>
        )}
        {address && (
          <View className="yy-address_text">
            <Text className="yy-address_del">{address.area + address.city + address.full_address}</Text>
            <View className="yy-address_len">
              <Text>{address.contacts}</Text>
              <Text> {address.phone}</Text>
            </View>
          </View>
        )}
      </View>
      {!buttonHide && (
        <View className="yy-address_switch">
          <View className="yy-location-switch">
            {switchLists.map((item, index) => (
              <View
                // onClick={() => setCheckedKey(item)}
                className={`yy-switch_item ${item.isChecked ? 'yy-switch_checked' : ''}`}
                key={index}
              >
                {item.name}
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};
