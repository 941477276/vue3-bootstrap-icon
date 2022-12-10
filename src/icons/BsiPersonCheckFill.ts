// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonCheckFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonCheckFill: BsiPersonCheckFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-check-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},"children":[]}]
  });
};
BsiPersonCheckFill.displayName = 'BsiPersonCheckFill';
export default BsiPersonCheckFill;
export { BsiPersonCheckFill };