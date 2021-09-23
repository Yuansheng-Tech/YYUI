import React from 'react';
import { AtGrid } from 'taro-ui';
import classnames from 'classnames';

export interface IGridProps {
  mode: 'square' | 'rect';
  hasBorder: boolean;
  columnNum: number;
  onClick: (item: object, index: number) => void;
  data: {
    image: string;
    value: string;
    url?: string;
  }[];
}

export const YYGrid = (props: IGridProps) => {
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
