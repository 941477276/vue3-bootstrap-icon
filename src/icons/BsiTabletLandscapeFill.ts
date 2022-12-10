// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTabletLandscapeFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTabletLandscapeFill: BsiTabletLandscapeFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tablet-landscape-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},"children":[]}]
  });
};
BsiTabletLandscapeFill.displayName = 'BsiTabletLandscapeFill';
export default BsiTabletLandscapeFill;
export { BsiTabletLandscapeFill };