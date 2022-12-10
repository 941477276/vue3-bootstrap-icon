// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCapsuleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCapsule: BsiCapsuleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'capsule',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"},"children":[]}]
  });
};
BsiCapsule.displayName = 'BsiCapsule';
export default BsiCapsule;
export { BsiCapsule };