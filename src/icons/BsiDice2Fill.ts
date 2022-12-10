// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDice2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDice2Fill: BsiDice2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'dice-2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"},"children":[]}]
  });
};
BsiDice2Fill.displayName = 'BsiDice2Fill';
export default BsiDice2Fill;
export { BsiDice2Fill };