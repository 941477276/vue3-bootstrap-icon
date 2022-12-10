// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRSquareFill: BsiRSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'r-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.835 5.092v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417H6.835Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5V4.002Z"},"children":[]}]
  });
};
BsiRSquareFill.displayName = 'BsiRSquareFill';
export default BsiRSquareFill;
export { BsiRSquareFill };