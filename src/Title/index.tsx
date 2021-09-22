import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { router } from '@ysyp/utils/dist/router';
import { AtIcon } from 'taro-ui';

// import { Title } from '@tarojs/components'
// http://www.fhdq.net/bd/94.html
/** <>()（）〈〉‹›﹛﹜『』〖〗［］《》﹝﹞〔〕{}「」【】︵︶︷︸︿﹀︹︺︽︾﹁﹂﹃﹄︻︼ */

export interface ITitleProps {
  title: string;
  icon?: string;
  subTitle?: string;
  more?: string;
  url?: string;
  fontSize?: string;
  padding?: string;
  onClick?: () => void;
}

export const YYTitle = (props: ITitleProps) => {
  const { title, fontSize = '12px', padding = '10px', onClick, icon } = props;
  return (
    <View
      className="yy-title"
      style={{
        fontSize,
        padding,
      }}
      onClick={onClick}
    >
      <Text className="yy-title-text">
        {!!icon && (
          <Image
            src={icon}
            className="yy-title-icon"
            style={{
              width: fontSize,
            }}
          />
        )}
        {title}
      </Text>
    </View>
  );
};

export const YYSubTitle = (props: ITitleProps) => {
  const { title, icon, subTitle, more, url, fontSize = '12px', padding = '10px', onClick } = props;
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
        <Text className="yy-title-text">
          {!!icon && (
            <Image
              src={icon}
              className="yy-title-icon"
              style={{
                width: fontSize,
              }}
            />
          )}
          {title}
        </Text>
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
