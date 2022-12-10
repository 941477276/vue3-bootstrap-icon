// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCloudFog2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCloudFog2Fill: BsiCloudFog2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cloud-fog2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"},"children":[]}]
  });
};
BsiCloudFog2Fill.displayName = 'BsiCloudFog2Fill';
export default BsiCloudFog2Fill;
export { BsiCloudFog2Fill };