import { IFetchContainerProps } from './fetch';
import { IContainerProps } from './index';

export const containerDataSource: IContainerProps = {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  children: null,
};

export const fetchContainerDataSource: IFetchContainerProps = {
  store: 'goodStore',
  url: '/goods',
  children: null,
};
