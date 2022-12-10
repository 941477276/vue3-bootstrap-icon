// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTabletLandscapeType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTabletLandscape: BsiTabletLandscapeType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tablet-landscape',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"},"children":[]}]
  });
};
BsiTabletLandscape.displayName = 'BsiTabletLandscape';
export default BsiTabletLandscape;
export { BsiTabletLandscape };