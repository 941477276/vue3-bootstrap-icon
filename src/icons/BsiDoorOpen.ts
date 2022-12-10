// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDoorOpenType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDoorOpen: BsiDoorOpenType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'door-open',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"},"children":[]}]
  });
};
BsiDoorOpen.displayName = 'BsiDoorOpen';
export default BsiDoorOpen;
export { BsiDoorOpen };