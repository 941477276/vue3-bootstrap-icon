// src/icons/BsiArrowDownRightSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownRightSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-right-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z" }, "children": [] }]
  });
};
BsiArrowDownRightSquareFill.displayName = "BsiArrowDownRightSquareFill";
var BsiArrowDownRightSquareFill_default = BsiArrowDownRightSquareFill;
export {
  BsiArrowDownRightSquareFill,
  BsiArrowDownRightSquareFill_default as default
};
