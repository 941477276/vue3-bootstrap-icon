// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDoorClosedFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDoorClosedFill: BsiDoorClosedFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'door-closed-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},"children":[]}]
  });
};
BsiDoorClosedFill.displayName = 'BsiDoorClosedFill';
export default BsiDoorClosedFill;
export { BsiDoorClosedFill };