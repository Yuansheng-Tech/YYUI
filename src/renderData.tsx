import * as React from 'react';
import { mapValues } from 'lodash';

import * as YYUI from './index';

export const transformDataSource = (val) => {
  return mapValues(val, (v) => {
    console.log('transformDataSource', typeof v, v);
    return typeof v === 'function' ? v.toString() : v;
  });
};

export const unTransformDataSource = (val) => {
  if (Array.isArray(val)) {
    return val;
  }
  // @ts-ignore
  String.prototype.toFunction = function () {
    return eval('(' + this + ')');
  };
  return mapValues(val, (v) => {
    if (Array.isArray(v)) {
      return v;
    }
    if (typeof v === 'string') {
      // @ts-ignore
      return /^function /g.test(v) ? v.toFunction() : v;
    }
    if (typeof v === 'object') {
      return unTransformDataSource(v);
    }
    // return /^function /g.test(v) ? v.toFunction() : v;
  });
};

export const renderData = (props) => {
  const { name, data } = props;
  return React.createElement(
    YYUI[name],
    {
      ...data,
    },
    null
  );
};

export const renderRichData = (props) => {
  const { name = 'YYHtml', data } = props;
  return React.createElement(
    YYUI[name],
    {
      type: 'text',
      nodes: data,
    },
    null
  );
  // <RichText nodes={data} />
};

export const renderDatas = (props) => {
  const { name, data = {} } = props;
  if (!name) {
    return null;
  }
  const { children = [] } = data;

  let dataStashs = children;
  if (Array.isArray(children)) {
    dataStashs = children.map((v) => {
      return !!v && v.name ? renderDatas(v) : v || null;
    });
  }
  if (typeof children === 'object' && children !== null) {
    dataStashs = children.map((v) => {
      return !!v && v.name ? renderDatas(v) : v || null;
    });
  }
  return React.createElement(
    YYUI[name],
    {
      ...data,
    },
    dataStashs
  );
};
