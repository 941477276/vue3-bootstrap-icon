// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignTopType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignTop: BsiAlignTopType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-top',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"rect","nodeType":1,"attrs":{"width":"4","height":"12","rx":"1","transform":"matrix(1 0 0 -1 6 15)"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"},"children":[]}]
  });
};
BsiAlignTop.displayName = 'BsiAlignTop';
export default BsiAlignTop;
export { BsiAlignTop };