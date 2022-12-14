// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignNoLeftTurnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignNoLeftTurnFill: BsiSignNoLeftTurnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-no-left-turn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 13.292A8 8 0 0 1 13.293 2L9.195 6.099A2.501 2.501 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966a.265.265 0 0 0 .026.02L2 13.291Zm.708.708A8 8 0 0 0 14 2.707l-3.885 3.884C10.656 7.05 11 7.735 11 8.5V11h-1V8.5c0-.489-.234-.923-.596-1.197l-6.696 6.696Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.293 7 7 8.293V7h1.293Z"},"children":[]}]
  });
};
BsiSignNoLeftTurnFill.displayName = 'BsiSignNoLeftTurnFill';
export default BsiSignNoLeftTurnFill;
export { BsiSignNoLeftTurnFill };