// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCupFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCupFill: BsiCupFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cup-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"},"children":[]}]
  });
};
BsiCupFill.displayName = 'BsiCupFill';
export default BsiCupFill;
export { BsiCupFill };