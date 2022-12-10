// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAmdType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAmd: BsiAmdType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'amd',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"},"children":[]}]
  });
};
BsiAmd.displayName = 'BsiAmd';
export default BsiAmd;
export { BsiAmd };