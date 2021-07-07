import React, { Component } from "react";
import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import classnames from 'classnames';

import "./index.scss";

export interface IAddProps {
  valueNum: number
  stock?: number
  step: number
  min: number
  onGetValue: (val: number) => void
}

interface IState {
  priceValue: number
}

export default class CartAdd extends Component<IAddProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      priceValue: this.props.valueNum ? this.props.valueNum : 1
    };
  }
  static options = {
      addGlobalClass: true
  }
  static defaultProps = {
    priceValue: 1,
    onAddClick: () => {},
    onReduceClick: () => {}
  };

  onAddClick(value) {
    const priceValue = this.state.priceValue;
    const { stock, min = 0, onGetValue } = this.props
    if ((stock !== undefined) && (value > 0) && (stock <= priceValue)) {
      return Taro.showToast({
        title: `库存不足, 仅剩 ${stock} 件`,
        icon: 'none'
      })
    }
    if (value > 0) {
      const values = priceValue + value;
      this.setState({
        priceValue: values
      });
      onGetValue(values);
    } else {
      console.log('priceValue + value', priceValue, value, priceValue + value);
      const values = priceValue === min ? priceValue : (priceValue + value);
      this.setState({
        priceValue: values
      });
      onGetValue(values);
    }
  }
  render() {
    const { priceValue } = this.state;
    const { step = 1 } = this.props
    return (
      <View className="yy-cartadd-add">
        <Text
          onClick={() => this.onAddClick(-Number(step))}
          className={classnames({
            "yy-cartadd-minus-circle": true,
            "yy-cartadd-circle": true,
          })}> - </Text>
        <Text className="yy-cartadd-num">{priceValue}</Text>
        <Text
          onClick={() => this.onAddClick(step)}
          className={classnames({
            "yy-cartadd-plus-circle": true,
            "yy-cartadd-circle": true,
          })}>+</Text>
      </View>
    );
  }
}
