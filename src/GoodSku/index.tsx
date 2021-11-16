import React from 'react';
import { View } from '@tarojs/components';

export interface ISku {
  id: string;
  standard: string;
}

export interface IMaterial {
  id: string;
  name: string;
}

export interface IGoodSkuProps {
  margin?: string;
  materielsGroup: {
    [key: string]: IMaterial[];
  };
  skusGroup: {
    [key: string]: ISku[];
  };
  selectSkusGroup: {
    [key: string]: string[];
  };
  selectMaterielsGroup: {
    [key: string]: string[];
  };
}

export const YYGoodSku = (props: IGoodSkuProps) => {
  const {
    margin = '0px',
    materielsGroup = {},
    skusGroup = {},
    selectSkusGroup = {},
    selectMaterielsGroup = {},
  } = props;
  return (
    <View
      className='yy-skus-materiels'
      style={{
        margin,
      }}
    >
      {(!!Object.keys(materielsGroup).length || !!Object.keys(skusGroup).length) && (
        <View className='yy-skus-materiels-group'>
          <View className='yy-skus-group'>
            <View className='yy-skus-group-title'>选择规格（单选）：</View>
            {Object.keys(skusGroup).map((v) => {
              return (
                <View className='yy-skus-group-items' key={v}>
                  <View className='yy-skus-group-items-title'>{v}</View>
                  <View className='yy-skus-items-group'>
                    {skusGroup[v].map((item, index) => {
                      // item.checked && this.onSeletedClick(item, item.id, v, true);
                      return (
                        <View
                          key={item.id + index}
                          className={`yy-skus-item yy-skus-item-color ${
                            [...(selectSkusGroup[v] || [])].includes(item.id) ? 'shop-seleted' : ''
                          }`}
                          onClick={() => {
                            // onSeletedClick(item, item.id, v, true)
                          }}
                        >
                          {item.standard}
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
          <View className='yy-skus-group'>
            <View className='yy-skus-group-title'>选择加料（可多选）：</View>
            {Object.keys(materielsGroup).map((v) => {
              return (
                <View className='yy-skus-group-items' key={v}>
                  <View className='yy-skus-group-items-title'>{v}</View>
                  <View className='yy-skus-items-group'>
                    {materielsGroup[v].map((item, index) => {
                      // item.checked && this.onSeletedClick(item, item.id, v);
                      return (
                        <View
                          key={item.id + index}
                          className={`yy-skus-item yy-skus-item-color ${
                            [...(selectMaterielsGroup[v] || [])].includes(item.id) ? 'shop-seleted' : null
                          }`}
                          onClick={() => {
                            // onSeletedClick(item, item.id, v)
                          }}
                        >
                          {item.name}
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};
