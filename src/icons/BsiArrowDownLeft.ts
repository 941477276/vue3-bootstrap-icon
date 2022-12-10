// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownLeft: BsiArrowDownLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"},"children":[]}]
  });
};
BsiArrowDownLeft.displayName = 'BsiArrowDownLeft';
export default BsiArrowDownLeft;
export { BsiArrowDownLeft };