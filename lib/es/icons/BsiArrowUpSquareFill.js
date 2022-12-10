// src/icons/BsiArrowUpSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" }, "children": [] }]
  });
};
BsiArrowUpSquareFill.displayName = "BsiArrowUpSquareFill";
var BsiArrowUpSquareFill_default = BsiArrowUpSquareFill;
export {
  BsiArrowUpSquareFill,
  BsiArrowUpSquareFill_default as default
};
