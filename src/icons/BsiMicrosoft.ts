// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMicrosoftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMicrosoft: BsiMicrosoftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'microsoft',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"},"children":[]}]
  });
};
BsiMicrosoft.displayName = 'BsiMicrosoft';
export default BsiMicrosoft;
export { BsiMicrosoft };