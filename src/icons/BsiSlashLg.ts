// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSlashLgType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSlashLg: BsiSlashLgType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'slash-lg',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"},"children":[]}]
  });
};
BsiSlashLg.displayName = 'BsiSlashLg';
export default BsiSlashLg;
export { BsiSlashLg };