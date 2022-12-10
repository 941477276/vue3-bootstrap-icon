// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTropicalStormType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTropicalStorm: BsiTropicalStormType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tropical-storm',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"},"children":[]}]
  });
};
BsiTropicalStorm.displayName = 'BsiTropicalStorm';
export default BsiTropicalStorm;
export { BsiTropicalStorm };