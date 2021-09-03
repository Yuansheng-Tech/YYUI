import React from 'react';
import { View, Text } from '@tarojs/components';
import { router } from '@ysyp/utils/src/router';

// import { Title } from '@tarojs/components'
// http://www.fhdq.net/bd/94.html
/** <>()（）〈〉‹›﹛﹜『』〖〗［］《》﹝﹞〔〕{}「」【】︵︶︷︸︿﹀︹︺︽︾﹁﹂﹃﹄︻︼ */

export interface ITitleProps {
  title: string;
  subTitle?: string;
  more?: string;
  url?: string;
  fontSize?: string;
  padding?: string;
  onClick?: () => void;
}

export const YYTitle = (props: ITitleProps) => {
  const { title, fontSize = '12px', padding = '10px', onClick } = props;
  return (
    <View
      className="yy-title"
      style={{
        fontSize,
        padding,
      }}
      onClick={onClick}
    >
      <Text className="yy-title-text">{title}</Text>
    </View>
  );
};

export const YYSubTitle = (props: ITitleProps) => {
  const { title, subTitle, more, url, fontSize = '12px', padding = '10px', onClick } = props;
  return (
    <View
      className="yy-title"
      style={{
        fontSize,
        padding,
      }}
      onClick={onClick}
    >
      <View className="yy-title-left">
        <Text className="yy-title-text">{title}</Text>
        {subTitle && <Text className="yy-title-subtext">{subTitle}</Text>}
      </View>
      {more && (
        <View
          className="yy-title-right"
          onClick={() =>
            url &&
            router.navigateTo({
              url,
            })
          }
        >
          <Text className="yy-title-more">{more}</Text>
          <Text className="yy-title-arrow">〉</Text>
        </View>
      )}
    </View>
  );
};
