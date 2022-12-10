// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEraserFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEraserFill: BsiEraserFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'eraser-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"},"children":[]}]
  });
};
BsiEraserFill.displayName = 'BsiEraserFill';
export default BsiEraserFill;
export { BsiEraserFill };