// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExclamationDiamondFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExclamationDiamondFill: BsiExclamationDiamondFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'exclamation-diamond-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"},"children":[]}]
  });
};
BsiExclamationDiamondFill.displayName = 'BsiExclamationDiamondFill';
export default BsiExclamationDiamondFill;
export { BsiExclamationDiamondFill };