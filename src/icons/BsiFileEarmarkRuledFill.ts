// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkRuledFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkRuledFill: BsiFileEarmarkRuledFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-ruled-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1H6v2h7v1H6v2H5v-2H3v-1h2v-2H3V9z"},"children":[]}]
  });
};
BsiFileEarmarkRuledFill.displayName = 'BsiFileEarmarkRuledFill';
export default BsiFileEarmarkRuledFill;
export { BsiFileEarmarkRuledFill };