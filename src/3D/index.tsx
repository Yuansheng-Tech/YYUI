import { Block, View, Canvas } from '@tarojs/components';
import React from 'react';
import Taro from '@tarojs/taro';
import { createScopedThreejs } from 'threejs-miniprogram';
const { renderModel } = require('@ysyp/utils');

export class YYThreeGLB extends React.Component {
  data = {};
  canvas;
  onReady = () => {
    this.setState({}, () => {
      const query = Taro.createSelectorQuery().select('#webgl').node();
      query.exec((res) => {
        console.log('res', res);
        const canvas = res[0].node;
        this.canvas = canvas;
        const THREE = createScopedThreejs(canvas);

        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        renderModel(canvas, THREE);
      });
    });
  };
  touchStart = (e) => {
    this.canvas.dispatchTouchEvent({ ...e, type: 'touchstart' });
  };
  touchMove = (e) => {
    this.canvas.dispatchTouchEvent({ ...e, type: 'touchmove' });
  };
  touchEnd = (e) => {
    this.canvas.dispatchTouchEvent({ ...e, type: 'touchend' });
  };
  render() {
    return (
      <Block>
        <View style="height: 50px"></View>
        <Canvas
          type="webgl"
          id="webgl"
          style="width: 100%; height: 450px;"
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        ></Canvas>
        <Canvas type="webgl" id="webgl" style="width: 100%; height: 300px;"></Canvas>
      </Block>
    );
  }
}
