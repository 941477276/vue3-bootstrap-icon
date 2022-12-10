// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkPlusFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkPlusFill: BsiFileEarmarkPlusFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-plus-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"},"children":[]}]
  });
};
BsiFileEarmarkPlusFill.displayName = 'BsiFileEarmarkPlusFill';
export default BsiFileEarmarkPlusFill;
export { BsiFileEarmarkPlusFill };