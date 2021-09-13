import * as React from 'react';
import classnames from 'classnames';
import { View } from '@tarojs/components';

const Wrapper = (props: any) => {
  const [coverClass, setCoverClass] = React.useState(false);

  return (
    <View
      className={classnames({
        'taro-ui-wrapper': true,
        'taro-ui-cover': coverClass,
      })}
      {...props}
      onClick={(e) => {
        document.querySelectorAll('.adm-popover').forEach((v) => v.classList.add('adm-popover-hidden'));
        document.querySelectorAll('.taro-ui-wrapper').forEach((v) => v.classList.remove('taro-ui-cover'));
        setCoverClass(!coverClass);
        e.stopPropagation();
      }}
    >
      {props.children}
    </View>
  );
};

export default Wrapper;
