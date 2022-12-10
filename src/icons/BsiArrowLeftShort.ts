// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowLeftShortType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowLeftShort: BsiArrowLeftShortType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-left-short',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"},"children":[]}]
  });
};
BsiArrowLeftShort.displayName = 'BsiArrowLeftShort';
export default BsiArrowLeftShort;
export { BsiArrowLeftShort };