import React from 'react';
import { Block, Canvas } from '@tarojs/components';
import Taro, { useReady } from '@tarojs/taro';
import { createScopedThreejs } from 'threejs-miniprogram';
interface IYYThreeGLBProps {
  url: string;
}

export const YYThreeGLB = (props: IYYThreeGLBProps) => {
  // let data = {}
  let canvas;
  useReady(() => {
    const query = Taro.createSelectorQuery().select('#webgl').node();
    query.exec((res) => {
      console.log('res', res);
      canvas = res[0].node;
      const THREE = createScopedThreejs(canvas);
      console.log('111', 111);
      // renderSphere(canvas, THREE)
      // renderCube(canvas, THREE)
      // renderCubes(canvas, THREE)
      // renderModel(canvas, THREE, props.url);
    });
  });
  return (
    <Block>
      <Canvas type="webgl" id="webgl" style="width: 100%; height: 450px;background-color:#ddd;"></Canvas>
    </Block>
  );
};
