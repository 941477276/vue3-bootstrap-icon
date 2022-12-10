// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBagDashFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBagDashFill: BsiBagDashFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bag-dash-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"},"children":[]}]
  });
};
BsiBagDashFill.displayName = 'BsiBagDashFill';
export default BsiBagDashFill;
export { BsiBagDashFill };