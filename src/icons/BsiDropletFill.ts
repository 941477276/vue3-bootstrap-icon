// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDropletFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDropletFill: BsiDropletFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'droplet-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"},"children":[]}]
  });
};
BsiDropletFill.displayName = 'BsiDropletFill';
export default BsiDropletFill;
export { BsiDropletFill };