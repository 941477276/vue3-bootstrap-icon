// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRewindType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRewind: BsiRewindType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'rewind',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.196 8 15 4.633v6.734L9.196 8Zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.196 8 7 4.633v6.734L1.196 8Zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z"},"children":[]}]
  });
};
BsiRewind.displayName = 'BsiRewind';
export default BsiRewind;
export { BsiRewind };