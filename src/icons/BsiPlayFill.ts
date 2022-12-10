// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPlayFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPlayFill: BsiPlayFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'play-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"},"children":[]}]
  });
};
BsiPlayFill.displayName = 'BsiPlayFill';
export default BsiPlayFill;
export { BsiPlayFill };