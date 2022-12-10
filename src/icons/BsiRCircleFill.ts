// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRCircleFill: BsiRCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'r-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002V12h1.335V8.924H8.52L9.98 12h1.52L9.856 8.701c.828-.299 1.495-1.101 1.495-2.238 0-1.488-1.03-2.461-2.74-2.461H5.5Zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417H6.835Z"},"children":[]}]
  });
};
BsiRCircleFill.displayName = 'BsiRCircleFill';
export default BsiRCircleFill;
export { BsiRCircleFill };