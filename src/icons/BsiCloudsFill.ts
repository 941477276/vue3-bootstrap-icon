// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCloudsFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCloudsFill: BsiCloudsFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'clouds-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"},"children":[]}]
  });
};
BsiCloudsFill.displayName = 'BsiCloudsFill';
export default BsiCloudsFill;
export { BsiCloudsFill };