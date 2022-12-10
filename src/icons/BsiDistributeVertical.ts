// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDistributeVerticalType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDistributeVertical: BsiDistributeVerticalType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'distribute-vertical',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"},"children":[]}]
  });
};
BsiDistributeVertical.displayName = 'BsiDistributeVertical';
export default BsiDistributeVertical;
export { BsiDistributeVertical };