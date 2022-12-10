// src/icons/BsiArrowRightSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowRightSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-right-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiArrowRightSquareFill.displayName = "BsiArrowRightSquareFill";
var BsiArrowRightSquareFill_default = BsiArrowRightSquareFill;
export {
  BsiArrowRightSquareFill,
  BsiArrowRightSquareFill_default as default
};
