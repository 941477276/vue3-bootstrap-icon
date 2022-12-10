// src/icons/BsiTypeH1.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTypeH1 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "type-h1",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" }, "children": [] }]
  });
};
BsiTypeH1.displayName = "BsiTypeH1";
var BsiTypeH1_default = BsiTypeH1;
export {
  BsiTypeH1,
  BsiTypeH1_default as default
};
