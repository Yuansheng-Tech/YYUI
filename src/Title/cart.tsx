import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { router } from '@ysyp/utils/dist/router';
import { AtIcon } from 'taro-ui';

// import { Title } from '@tarojs/components'
// http://www.fhdq.net/bd/94.html
/** <>()（）〈〉‹›﹛﹜『』〖〗［］《》﹝﹞〔〕{}「」【】︵︶︷︸︿﹀︹︺︽︾﹁﹂﹃﹄︻︼ */

export interface ICartTitleProps {
  title: string;
  icon?: string;
  deleteIcon?: boolean;
  subTitle?: string;
  more?: string;
  url?: string;
  fontSize?: string;
  padding?: string;
}

export const YYCartTitle = (props: ICartTitleProps) => {
  const { title, icon, subTitle, more, url, fontSize = '12px', padding = '10px', deleteIcon } = props;
  return (
    <View
      className="yy-title yy-cart-title"
      style={{
        fontSize,
        padding,
      }}
    >
      <View
        className="yy-title-left"
        onClick={() =>
          more &&
          url &&
          router.navigateTo({
            url,
          })
        }
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
          {title} 〉
        </Text>
        {subTitle && <Text className="yy-title-subtext">{subTitle}</Text>}
      </View>
      {deleteIcon && (
        <View
          className="yy-title-right"
          onClick={() => {
            console.log();
          }}
        >
          <AtIcon value="trash" size="30" color="#F00"></AtIcon>
        </View>
      )}
    </View>
  );
};
