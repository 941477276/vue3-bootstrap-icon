// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEasel2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEasel2Fill: BsiEasel2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'easel2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809L8.447.276Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1H.5Zm3.64 2 .25-1h7.22l.25 1H4.14Z"},"children":[]}]
  });
};
BsiEasel2Fill.displayName = 'BsiEasel2Fill';
export default BsiEasel2Fill;
export { BsiEasel2Fill };