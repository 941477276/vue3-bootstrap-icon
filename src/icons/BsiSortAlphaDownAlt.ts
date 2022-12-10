// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSortAlphaDownAltType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSortAlphaDownAlt: BsiSortAlphaDownAltType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sort-alpha-down-alt',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"},"children":[]}]
  });
};
BsiSortAlphaDownAlt.displayName = 'BsiSortAlphaDownAlt';
export default BsiSortAlphaDownAlt;
export { BsiSortAlphaDownAlt };