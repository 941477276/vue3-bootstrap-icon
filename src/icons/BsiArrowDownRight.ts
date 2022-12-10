// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownRight: BsiArrowDownRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"},"children":[]}]
  });
};
BsiArrowDownRight.displayName = 'BsiArrowDownRight';
export default BsiArrowDownRight;
export { BsiArrowDownRight };