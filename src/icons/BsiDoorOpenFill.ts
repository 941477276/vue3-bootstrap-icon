// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDoorOpenFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDoorOpenFill: BsiDoorOpenFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'door-open-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"},"children":[]}]
  });
};
BsiDoorOpenFill.displayName = 'BsiDoorOpenFill';
export default BsiDoorOpenFill;
export { BsiDoorOpenFill };