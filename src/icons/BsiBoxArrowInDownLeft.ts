// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBoxArrowInDownLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBoxArrowInDownLeft: BsiBoxArrowInDownLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'box-arrow-in-down-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"},"children":[]}]
  });
};
BsiBoxArrowInDownLeft.displayName = 'BsiBoxArrowInDownLeft';
export default BsiBoxArrowInDownLeft;
export { BsiBoxArrowInDownLeft };