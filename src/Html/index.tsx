import React from 'react';
import { RichText, View, Image, WebView } from '@tarojs/components';
export interface IHtmlProps {
  type?: 'text' | 'node' | 'url' | 'image';
  url?: string;
  text?: string;
  height?: string;
  fullScreen?: boolean;
}

export const YYHtml = (props: IHtmlProps) => {
  const { type, url = '', text = '', height = '300px', fullScreen = false } = props;
  return (
    <View
      className="yy-html"
      style={{
        height,
        position: fullScreen ? 'fixed' : 'relative',
      }}
    >
      {type === 'url' && url && <WebView className="web-view" src={url}></WebView>}
      {type === 'text' && (
        <View className="rich-text">
          <RichText nodes={text}></RichText>
        </View>
      )}
      {type === 'image' && (
        <View className="img-view">
          <Image className="img-view-img" src={url} />
        </View>
      )}
    </View>
  );
};
