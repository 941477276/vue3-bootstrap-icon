// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDice1Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDice1: BsiDice1Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'dice-1',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"circle","nodeType":1,"attrs":{"cx":"8","cy":"8","r":"1.5"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"},"children":[]}]
  });
};
BsiDice1.displayName = 'BsiDice1';
export default BsiDice1;
export { BsiDice1 };