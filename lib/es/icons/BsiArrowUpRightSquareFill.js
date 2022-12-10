// src/icons/BsiArrowUpRightSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpRightSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-right-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" }, "children": [] }]
  });
};
BsiArrowUpRightSquareFill.displayName = "BsiArrowUpRightSquareFill";
var BsiArrowUpRightSquareFill_default = BsiArrowUpRightSquareFill;
export {
  BsiArrowUpRightSquareFill,
  BsiArrowUpRightSquareFill_default as default
};
