// src/icons/BsiHSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "h-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z" }, "children": [] }]
  });
};
BsiHSquareFill.displayName = "BsiHSquareFill";
var BsiHSquareFill_default = BsiHSquareFill;
export {
  BsiHSquareFill,
  BsiHSquareFill_default as default
};
