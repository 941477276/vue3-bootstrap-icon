// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPlayCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPlayCircleFill: BsiPlayCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'play-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"},"children":[]}]
  });
};
BsiPlayCircleFill.displayName = 'BsiPlayCircleFill';
export default BsiPlayCircleFill;
export { BsiPlayCircleFill };