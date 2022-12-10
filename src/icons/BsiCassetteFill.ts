// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCassetteFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCassetteFill: BsiCassetteFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cassette-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h.191l1.862-3.724A.5.5 0 0 1 4 10h8a.5.5 0 0 1 .447.276L14.31 14h.191a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13ZM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"m13.191 14-1.5-3H4.309l-1.5 3h10.382Z"},"children":[]}]
  });
};
BsiCassetteFill.displayName = 'BsiCassetteFill';
export default BsiCassetteFill;
export { BsiCassetteFill };