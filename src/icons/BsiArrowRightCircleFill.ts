// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowRightCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowRightCircleFill: BsiArrowRightCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-right-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"},"children":[]}]
  });
};
BsiArrowRightCircleFill.displayName = 'BsiArrowRightCircleFill';
export default BsiArrowRightCircleFill;
export { BsiArrowRightCircleFill };