// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMouseFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMouseFill: BsiMouseFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'mouse-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"},"children":[]}]
  });
};
BsiMouseFill.displayName = 'BsiMouseFill';
export default BsiMouseFill;
export { BsiMouseFill };