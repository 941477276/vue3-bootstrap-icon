// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowsAngleContractType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowsAngleContract: BsiArrowsAngleContractType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrows-angle-contract',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"},"children":[]}]
  });
};
BsiArrowsAngleContract.displayName = 'BsiArrowsAngleContract';
export default BsiArrowsAngleContract;
export { BsiArrowsAngleContract };