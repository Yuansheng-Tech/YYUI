import React from 'react';
import Taro from '@tarojs/taro';
import { View, Map } from '@tarojs/components';

import './index.scss'

export interface IMapProps {
  id?: string
  name?: string
  latitude?: number
  longitude?: number
  markerImage?: string
  locationImage?: string
  scale?: number
  style?: string
}

export const YYMap = (props: IMapProps) => {
  const markers = [
    {
      iconPath: props.markerImage,
      latitude: props.latitude || Taro.getStorageSync("userLatitude"),
      longitude: props.longitude || Taro.getStorageSync("userLongitude"),
      width: 29,
      height: 29,
      id: props.id || '0',
      callout: {
        content: props.name || '',
        color: "#fff",
        fontSize: 12,
        borderRadius: 50,
        borderSize: 1,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: "center",
        display: "ALWAYS",
        bgColor: "#328967",
        anchorX: 0,
        anchorY: 0,
        padding: 5
      }
    }
  ]
  const gotohere = (item) => {
    let lat = Number(item[0].latitude);
    let lon = Number(item[0].longitude);
    Taro.openLocation({
      latitude: lat,
      longitude: lon,
      success: function (res) {
        // // console.log(res);
      },
      fail: function (res) {
        // // console.log(res);
      }
    })
  }
  return (<View className="map-navigation">
    <View className='set-map' >
        <Map
          iconPath={props.locationImage}
          className='navigation-map'
          id='map'
          scale={props.scale || 10}
          layerStyle={1}
          longitude={props.longitude || Taro.getStorageSync("userLng")}
          latitude={props.latitude || Taro.getStorageSync("userLat")}
          onClick={() => gotohere(markers)}
          markers={markers}
          showLocation
          setting={{}}
          style={props.style || `width: 100%; flex: 1; height: 200px;`}
        />
      </View>
  </View>)
}