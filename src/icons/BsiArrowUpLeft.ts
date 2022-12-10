// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowUpLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowUpLeft: BsiArrowUpLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-up-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"},"children":[]}]
  });
};
BsiArrowUpLeft.displayName = 'BsiArrowUpLeft';
export default BsiArrowUpLeft;
export { BsiArrowUpLeft };