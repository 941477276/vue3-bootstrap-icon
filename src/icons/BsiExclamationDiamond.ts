// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExclamationDiamondType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExclamationDiamond: BsiExclamationDiamondType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'exclamation-diamond',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"},"children":[]}]
  });
};
BsiExclamationDiamond.displayName = 'BsiExclamationDiamond';
export default BsiExclamationDiamond;
export { BsiExclamationDiamond };