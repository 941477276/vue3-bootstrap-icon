// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEaselFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEaselFill: BsiEaselFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'easel-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046L8.473.337z"},"children":[]}]
  });
};
BsiEaselFill.displayName = 'BsiEaselFill';
export default BsiEaselFill;
export { BsiEaselFill };