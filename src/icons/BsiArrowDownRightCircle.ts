// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownRightCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownRightCircle: BsiArrowDownRightCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-right-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"},"children":[]}]
  });
};
BsiArrowDownRightCircle.displayName = 'BsiArrowDownRightCircle';
export default BsiArrowDownRightCircle;
export { BsiArrowDownRightCircle };