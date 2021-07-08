import React from 'react';
import { AtGrid } from 'taro-ui';
import { AtGridProps } from 'taro-ui/types/grid';
import classnames from 'classnames';

export interface IProps {
  mode: 'square' | 'rect';
  hasBorder: boolean;
  columnNum: number;
  onClick: (item: object, index: number) => void;
  data: {
    image: string;
    value: string;
    url: string;
  }[];
}

export const YYGrid = (props: AtGridProps) => {
  const {
    // mode = 'rect',
    // hasBorder = true,
    columnNum = 1,
  } = props;
  return (
    <AtGrid
      className={classnames({
        'yy-grid': true,
        [`yy-grid-${columnNum}`]: !!columnNum,
      })}
      {...props}
    />
  );
};
