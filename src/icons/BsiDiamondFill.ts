// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDiamondFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDiamondFill: BsiDiamondFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'diamond-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"},"children":[]}]
  });
};
BsiDiamondFill.displayName = 'BsiDiamondFill';
export default BsiDiamondFill;
export { BsiDiamondFill };