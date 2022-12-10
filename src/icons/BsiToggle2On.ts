// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiToggle2OnType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiToggle2On: BsiToggle2OnType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'toggle2-on',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"},"children":[]}]
  });
};
BsiToggle2On.displayName = 'BsiToggle2On';
export default BsiToggle2On;
export { BsiToggle2On };