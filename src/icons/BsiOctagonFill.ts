// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiOctagonFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiOctagonFill: BsiOctagonFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'octagon-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11.107 0a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146A.5.5 0 0 1 4.893 0h6.214z"},"children":[]}]
  });
};
BsiOctagonFill.displayName = 'BsiOctagonFill';
export default BsiOctagonFill;
export { BsiOctagonFill };