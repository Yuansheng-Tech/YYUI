import React from 'react';
import { AtList, AtListItem } from 'taro-ui';
import { AtListItemProps } from 'taro-ui/types/list';

export interface IItemProps {
  title: string
  handleClick?: () => void
  onSwitchChange?: () => void
}

export interface IListProps {
  hasBorder: boolean;
  data: IItemProps[] & AtListItemProps[]
}

export const YYList = (props: IListProps) => {
  const {
    hasBorder = false,
    data = []
  } = props;
  return (<AtList hasBorder={hasBorder}>
    {data.map((val: IItemProps, key: number) => {
      const { title = '',
      handleClick = () => {},
      onSwitchChange = () => {},
      ...props
    } = val
      return <AtListItem
      {...props}
      key={key}
      title={title}
      onClick={handleClick}
      onSwitchChange={onSwitchChange}/>
    })}
  </AtList>);
}