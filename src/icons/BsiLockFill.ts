// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLockFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLockFill: BsiLockFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'lock-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"},"children":[]}]
  });
};
BsiLockFill.displayName = 'BsiLockFill';
export default BsiLockFill;
export { BsiLockFill };