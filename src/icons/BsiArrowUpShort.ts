// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowUpShortType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowUpShort: BsiArrowUpShortType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-up-short',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"},"children":[]}]
  });
};
BsiArrowUpShort.displayName = 'BsiArrowUpShort';
export default BsiArrowUpShort;
export { BsiArrowUpShort };