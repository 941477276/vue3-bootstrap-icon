// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBriefcaseFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBriefcaseFill: BsiBriefcaseFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'briefcase-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"},"children":[]}]
  });
};
BsiBriefcaseFill.displayName = 'BsiBriefcaseFill';
export default BsiBriefcaseFill;
export { BsiBriefcaseFill };