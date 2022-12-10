// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSaveFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSaveFill: BsiSaveFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'save-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"},"children":[]}]
  });
};
BsiSaveFill.displayName = 'BsiSaveFill';
export default BsiSaveFill;
export { BsiSaveFill };