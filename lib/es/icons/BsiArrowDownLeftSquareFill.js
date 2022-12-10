// src/icons/BsiArrowDownLeftSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownLeftSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-left-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707z" }, "children": [] }]
  });
};
BsiArrowDownLeftSquareFill.displayName = "BsiArrowDownLeftSquareFill";
var BsiArrowDownLeftSquareFill_default = BsiArrowDownLeftSquareFill;
export {
  BsiArrowDownLeftSquareFill,
  BsiArrowDownLeftSquareFill_default as default
};
