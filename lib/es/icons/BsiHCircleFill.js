// src/icons/BsiHCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "h-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11V4.002Z" }, "children": [] }]
  });
};
BsiHCircleFill.displayName = "BsiHCircleFill";
var BsiHCircleFill_default = BsiHCircleFill;
export {
  BsiHCircleFill,
  BsiHCircleFill_default as default
};
