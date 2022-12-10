// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronContractType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronContract: BsiChevronContractType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-contract',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"},"children":[]}]
  });
};
BsiChevronContract.displayName = 'BsiChevronContract';
export default BsiChevronContract;
export { BsiChevronContract };