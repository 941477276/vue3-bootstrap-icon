// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiShareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiShare: BsiShareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'share',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"},"children":[]}]
  });
};
BsiShare.displayName = 'BsiShare';
export default BsiShare;
export { BsiShare };