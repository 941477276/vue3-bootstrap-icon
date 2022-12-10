// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiForwardFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiForwardFill: BsiForwardFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'forward-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z"},"children":[]}]
  });
};
BsiForwardFill.displayName = 'BsiForwardFill';
export default BsiForwardFill;
export { BsiForwardFill };