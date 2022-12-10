// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCapslockFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCapslockFill: BsiCapslockFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'capslock-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z"},"children":[]}]
  });
};
BsiCapslockFill.displayName = 'BsiCapslockFill';
export default BsiCapslockFill;
export { BsiCapslockFill };