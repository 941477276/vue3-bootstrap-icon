// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignMiddleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignMiddle: BsiAlignMiddleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-middle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"},"children":[]}]
  });
};
BsiAlignMiddle.displayName = 'BsiAlignMiddle';
export default BsiAlignMiddle;
export { BsiAlignMiddle };