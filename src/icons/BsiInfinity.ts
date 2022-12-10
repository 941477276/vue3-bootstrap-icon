// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiInfinityType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiInfinity: BsiInfinityType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'infinity',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"},"children":[]}]
  });
};
BsiInfinity.displayName = 'BsiInfinity';
export default BsiInfinity;
export { BsiInfinity };