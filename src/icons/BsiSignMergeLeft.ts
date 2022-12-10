// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignMergeLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignMergeLeft: BsiSignMergeLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-merge-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.25 6v1c-.14.301-.338.617-.588.95-.537.716-1.259 1.44-2.016 2.196l.708.708.015-.016c.652-.652 1.33-1.33 1.881-2.015V12h1.5V6h1.216a.25.25 0 0 0 .192-.41L8.192 3.23a.25.25 0 0 0-.384 0L5.842 5.59a.25.25 0 0 0 .192.41H7.25Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"},"children":[]}]
  });
};
BsiSignMergeLeft.displayName = 'BsiSignMergeLeft';
export default BsiSignMergeLeft;
export { BsiSignMergeLeft };