// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFastForwardType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFastForward: BsiFastForwardType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'fast-forward',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"},"children":[]}]
  });
};
BsiFastForward.displayName = 'BsiFastForward';
export default BsiFastForward;
export { BsiFastForward };