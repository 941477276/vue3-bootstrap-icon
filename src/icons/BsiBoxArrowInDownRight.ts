// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBoxArrowInDownRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBoxArrowInDownRight: BsiBoxArrowInDownRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'box-arrow-in-down-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"},"children":[]}]
  });
};
BsiBoxArrowInDownRight.displayName = 'BsiBoxArrowInDownRight';
export default BsiBoxArrowInDownRight;
export { BsiBoxArrowInDownRight };