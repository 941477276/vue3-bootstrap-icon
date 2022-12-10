// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArchiveFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArchiveFill: BsiArchiveFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'archive-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"},"children":[]}]
  });
};
BsiArchiveFill.displayName = 'BsiArchiveFill';
export default BsiArchiveFill;
export { BsiArchiveFill };