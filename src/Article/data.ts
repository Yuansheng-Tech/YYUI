import { IImgProps } from './img';
import { IH1Props } from './h1';
import { IH2Props } from './h2';
import { IH3Props } from './h3';
import { IPProps } from './p';
import { IInfoProps } from './info';

export const h1DataSource: IH1Props = {
  content: '这是一级标题这是一级标题',
};

export const h2DataSource: IH2Props = {
  content: '这是二级标题',
};

export const h3DataSource: IH3Props = {
  content: '这是三级标题',
};

export const pDataSource: IPProps = {
  content:
    '这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

export const infoDataSource: IInfoProps = {
  content: '2017-05-07  付引',
};

export const imgDataSource: IImgProps = {
  src: 'https://file.yuanshengyoupin.com/files/hb10.png',
  mode: 'widthFix',
  height: '200px',
};
