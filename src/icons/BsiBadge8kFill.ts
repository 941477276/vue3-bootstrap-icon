// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBadge8kFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBadge8kFill: BsiBadge8kFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'badge-8k-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.9 6.605c0 .51.405.866.95.866.545 0 .945-.356.945-.866s-.4-.852-.945-.852c-.545 0-.95.343-.95.852zm-.192 2.668c0 .589.492.984 1.142.984.646 0 1.143-.395 1.143-.984S5.496 8.28 4.85 8.28c-.65 0-1.142.404-1.142.993z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.17 7.348c0 1.041-.927 1.766-2.333 1.766-1.406 0-2.312-.72-2.312-1.762 0-.954.712-1.384 1.257-1.494v-.053c-.51-.154-1.02-.558-1.02-1.331 0-.914.831-1.587 2.088-1.587 1.253 0 2.083.673 2.083 1.587 0 .782-.523 1.182-1.02 1.331v.053c.545.11 1.257.545 1.257 1.49zM12.102 5h1.306l-2.14 2.584 2.232 3.415h-1.428l-1.679-2.624-.615.699v1.925H8.59V5h1.187v2.685h.057L12.102 5z"},"children":[]}]
  });
};
BsiBadge8kFill.displayName = 'BsiBadge8kFill';
export default BsiBadge8kFill;
export { BsiBadge8kFill };