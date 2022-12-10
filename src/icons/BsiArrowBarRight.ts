// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowBarRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowBarRight: BsiArrowBarRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-bar-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"},"children":[]}]
  });
};
BsiArrowBarRight.displayName = 'BsiArrowBarRight';
export default BsiArrowBarRight;
export { BsiArrowBarRight };