// 图标模板
const iconTemplate = `
// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface <%= iconDisplayName %>Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const <%= iconDisplayName %>: <%= iconDisplayName %>Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '<%= svgName %>',
    isFilled: <%= isFilled %>,
    viewBox: props.viewBox || '<%= viewBox %>',
    svgChildrenVDom: <%= svgChildrenVDom %>
  });
};
<%= iconDisplayName %>.displayName = '<%= iconDisplayName %>';
export default <%= iconDisplayName %>;
export { <%= iconDisplayName %> };
`;

module.exports = iconTemplate;
