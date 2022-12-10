// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownShortType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownShort: BsiArrowDownShortType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-short',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"},"children":[]}]
  });
};
BsiArrowDownShort.displayName = 'BsiArrowDownShort';
export default BsiArrowDownShort;
export { BsiArrowDownShort };