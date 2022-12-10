// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEjectFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEjectFill: BsiEjectFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'eject-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816L7.27 1.047zM.5 11.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-1z"},"children":[]}]
  });
};
BsiEjectFill.displayName = 'BsiEjectFill';
export default BsiEjectFill;
export { BsiEjectFill };