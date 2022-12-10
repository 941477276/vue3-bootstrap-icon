// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBellSlashFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBellSlashFill: BsiBellSlashFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bell-slash-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z"},"children":[]}]
  });
};
BsiBellSlashFill.displayName = 'BsiBellSlashFill';
export default BsiBellSlashFill;
export { BsiBellSlashFill };