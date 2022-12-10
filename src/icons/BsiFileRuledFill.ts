// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileRuledFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileRuledFill: BsiFileRuledFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-ruled-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z"},"children":[]}]
  });
};
BsiFileRuledFill.displayName = 'BsiFileRuledFill';
export default BsiFileRuledFill;
export { BsiFileRuledFill };