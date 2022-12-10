// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignpostSplitFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignpostSplitFill: BsiSignpostSplitFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'signpost-split-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z"},"children":[]}]
  });
};
BsiSignpostSplitFill.displayName = 'BsiSignpostSplitFill';
export default BsiSignpostSplitFill;
export { BsiSignpostSplitFill };