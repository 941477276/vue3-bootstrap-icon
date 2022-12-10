// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignpostFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignpostFill: BsiSignpostFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'signpost-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"},"children":[]}]
  });
};
BsiSignpostFill.displayName = 'BsiSignpostFill';
export default BsiSignpostFill;
export { BsiSignpostFill };