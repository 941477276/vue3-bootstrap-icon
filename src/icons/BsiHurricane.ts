// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHurricaneType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHurricane: BsiHurricaneType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'hurricane',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"},"children":[]}]
  });
};
BsiHurricane.displayName = 'BsiHurricane';
export default BsiHurricane;
export { BsiHurricane };