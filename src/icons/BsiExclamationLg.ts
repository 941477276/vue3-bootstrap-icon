// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExclamationLgType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExclamationLg: BsiExclamationLgType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'exclamation-lg',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"},"children":[]}]
  });
};
BsiExclamationLg.displayName = 'BsiExclamationLg';
export default BsiExclamationLg;
export { BsiExclamationLg };