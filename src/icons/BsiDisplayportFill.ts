// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDisplayportFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDisplayportFill: BsiDisplayportFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'displayport-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Z"},"children":[]}]
  });
};
BsiDisplayportFill.displayName = 'BsiDisplayportFill';
export default BsiDisplayportFill;
export { BsiDisplayportFill };