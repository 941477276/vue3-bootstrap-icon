// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHeptagonFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHeptagonFill: BsiHeptagonFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'heptagon-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M7.779.052a.5.5 0 0 1 .442 0l6.015 2.97a.5.5 0 0 1 .267.34l1.485 6.676a.5.5 0 0 1-.093.415l-4.162 5.354a.5.5 0 0 1-.395.193H4.662a.5.5 0 0 1-.395-.193L.105 10.453a.5.5 0 0 1-.093-.415l1.485-6.676a.5.5 0 0 1 .267-.34L7.779.053z"},"children":[]}]
  });
};
BsiHeptagonFill.displayName = 'BsiHeptagonFill';
export default BsiHeptagonFill;
export { BsiHeptagonFill };