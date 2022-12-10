// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiInfoLgType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiInfoLg: BsiInfoLgType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'info-lg',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"},"children":[]}]
  });
};
BsiInfoLg.displayName = 'BsiInfoLg';
export default BsiInfoLg;
export { BsiInfoLg };