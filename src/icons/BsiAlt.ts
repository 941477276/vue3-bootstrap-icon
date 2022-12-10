// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAltType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlt: BsiAltType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'alt',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"},"children":[]}]
  });
};
BsiAlt.displayName = 'BsiAlt';
export default BsiAlt;
export { BsiAlt };