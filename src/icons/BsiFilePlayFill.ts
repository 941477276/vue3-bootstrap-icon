// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilePlayFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilePlayFill: BsiFilePlayFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-play-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"},"children":[]}]
  });
};
BsiFilePlayFill.displayName = 'BsiFilePlayFill';
export default BsiFilePlayFill;
export { BsiFilePlayFill };