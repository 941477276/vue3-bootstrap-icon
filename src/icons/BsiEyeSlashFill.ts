// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEyeSlashFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEyeSlashFill: BsiEyeSlashFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'eye-slash-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"},"children":[]}]
  });
};
BsiEyeSlashFill.displayName = 'BsiEyeSlashFill';
export default BsiEyeSlashFill;
export { BsiEyeSlashFill };