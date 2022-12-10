// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHdmiFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHdmiFill: BsiHdmiFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'hdmi-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.707.707 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1H1Zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1Z"},"children":[]}]
  });
};
BsiHdmiFill.displayName = 'BsiHdmiFill';
export default BsiHdmiFill;
export { BsiHdmiFill };