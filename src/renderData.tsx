import * as React from 'react';
import _mapValues from 'lodash.mapvalues';

import * as YYUI from './index';

export const transformDataSource = (val) => {
  return _mapValues(val, (v) => {
    return typeof v === 'function' ? v.toString() : v;
  });
};

export const unTransformDataSource = (val) => {
  if (Array.isArray(val)) { return val }
  // @ts-ignore
  String.prototype.toFunction = function () {
    return eval('(' + this + ')');
  };

  return _mapValues(val, (v) => {
    return /^function /g.test(v) ? v.toFunction() : v;
  });
};

export const RenderData = (props) => {
  const { name, data } = props;
  return React.createElement(
    YYUI[name],
    {
      ...data,
    },
    null
  );
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
