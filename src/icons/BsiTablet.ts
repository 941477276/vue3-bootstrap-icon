// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTabletType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTablet: BsiTabletType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tablet',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},"children":[]}]
  });
};
BsiTablet.displayName = 'BsiTablet';
export default BsiTablet;
export { BsiTablet };