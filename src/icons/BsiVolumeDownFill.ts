// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiVolumeDownFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiVolumeDownFill: BsiVolumeDownFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'volume-down-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"},"children":[]}]
  });
};
BsiVolumeDownFill.displayName = 'BsiVolumeDownFill';
export default BsiVolumeDownFill;
export { BsiVolumeDownFill };