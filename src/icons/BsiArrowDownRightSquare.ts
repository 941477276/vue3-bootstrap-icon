// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownRightSquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownRightSquare: BsiArrowDownRightSquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-right-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"},"children":[]}]
  });
};
BsiArrowDownRightSquare.displayName = 'BsiArrowDownRightSquare';
export default BsiArrowDownRightSquare;
export { BsiArrowDownRightSquare };