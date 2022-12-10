// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRewindFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRewindFill: BsiRewindFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'rewind-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z"},"children":[]}]
  });
};
BsiRewindFill.displayName = 'BsiRewindFill';
export default BsiRewindFill;
export { BsiRewindFill };