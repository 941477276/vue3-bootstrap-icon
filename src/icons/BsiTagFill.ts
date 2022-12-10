// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTagFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTagFill: BsiTagFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tag-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"},"children":[]}]
  });
};
BsiTagFill.displayName = 'BsiTagFill';
export default BsiTagFill;
export { BsiTagFill };