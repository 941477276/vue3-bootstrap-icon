// src/icons/BsiTypeH2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTypeH2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "type-h2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" }, "children": [] }]
  });
};
BsiTypeH2.displayName = "BsiTypeH2";
var BsiTypeH2_default = BsiTypeH2;
export {
  BsiTypeH2,
  BsiTypeH2_default as default
};
