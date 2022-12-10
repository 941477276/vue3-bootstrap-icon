// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilterRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilterRight: BsiFilterRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'filter-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"},"children":[]}]
  });
};
BsiFilterRight.displayName = 'BsiFilterRight';
export default BsiFilterRight;
export { BsiFilterRight };