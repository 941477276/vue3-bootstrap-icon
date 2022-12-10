// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiThermometerType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiThermometer: BsiThermometerType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'thermometer',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"},"children":[]}]
  });
};
BsiThermometer.displayName = 'BsiThermometer';
export default BsiThermometer;
export { BsiThermometer };