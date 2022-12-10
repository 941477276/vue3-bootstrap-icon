// src/icons/BsiArrowLeftSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowLeftSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-left-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" }, "children": [] }]
  });
};
BsiArrowLeftSquareFill.displayName = "BsiArrowLeftSquareFill";
var BsiArrowLeftSquareFill_default = BsiArrowLeftSquareFill;
export {
  BsiArrowLeftSquareFill,
  BsiArrowLeftSquareFill_default as default
};
