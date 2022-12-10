// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExclamationType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExclamation: BsiExclamationType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'exclamation',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"},"children":[]}]
  });
};
BsiExclamation.displayName = 'BsiExclamation';
export default BsiExclamation;
export { BsiExclamation };