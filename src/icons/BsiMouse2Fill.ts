// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMouse2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMouse2Fill: BsiMouse2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'mouse2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"},"children":[]}]
  });
};
BsiMouse2Fill.displayName = 'BsiMouse2Fill';
export default BsiMouse2Fill;
export { BsiMouse2Fill };