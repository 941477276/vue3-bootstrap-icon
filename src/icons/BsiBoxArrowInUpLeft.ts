// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBoxArrowInUpLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBoxArrowInUpLeft: BsiBoxArrowInUpLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'box-arrow-in-up-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z"},"children":[]}]
  });
};
BsiBoxArrowInUpLeft.displayName = 'BsiBoxArrowInUpLeft';
export default BsiBoxArrowInUpLeft;
export { BsiBoxArrowInUpLeft };