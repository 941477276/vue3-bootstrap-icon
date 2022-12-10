// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLayoutSidebarType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLayoutSidebar: BsiLayoutSidebarType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'layout-sidebar',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2V2z"},"children":[]}]
  });
};
BsiLayoutSidebar.displayName = 'BsiLayoutSidebar';
export default BsiLayoutSidebar;
export { BsiLayoutSidebar };