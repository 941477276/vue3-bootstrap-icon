// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPlusSlashMinusType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPlusSlashMinus: BsiPlusSlashMinusType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'plus-slash-minus',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"},"children":[]}]
  });
};
BsiPlusSlashMinus.displayName = 'BsiPlusSlashMinus';
export default BsiPlusSlashMinus;
export { BsiPlusSlashMinus };