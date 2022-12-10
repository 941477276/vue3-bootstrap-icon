// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSlashType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSlash: BsiSlashType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'slash',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"},"children":[]}]
  });
};
BsiSlash.displayName = 'BsiSlash';
export default BsiSlash;
export { BsiSlash };