// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCheckType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCheck: BsiCheckType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'check',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"},"children":[]}]
  });
};
BsiCheck.displayName = 'BsiCheck';
export default BsiCheck;
export { BsiCheck };