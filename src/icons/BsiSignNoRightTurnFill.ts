// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignNoRightTurnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignNoRightTurnFill: BsiSignNoRightTurnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-no-right-turn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098C7.025 6.034 7.259 6 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658a.265.265 0 0 1-.026.02L14 13.291Zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.495 2.495 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.707 7 9 8.293V7H7.707Z"},"children":[]}]
  });
};
BsiSignNoRightTurnFill.displayName = 'BsiSignNoRightTurnFill';
export default BsiSignNoRightTurnFill;
export { BsiSignNoRightTurnFill };