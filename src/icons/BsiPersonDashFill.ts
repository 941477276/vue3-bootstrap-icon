// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonDashFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonDashFill: BsiPersonDashFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-dash-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},"children":[]}]
  });
};
BsiPersonDashFill.displayName = 'BsiPersonDashFill';
export default BsiPersonDashFill;
export { BsiPersonDashFill };