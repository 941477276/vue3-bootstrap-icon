// src/icons/BsiSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" }, "children": [] }]
  });
};
BsiSquareFill.displayName = "BsiSquareFill";
var BsiSquareFill_default = BsiSquareFill;
export {
  BsiSquareFill,
  BsiSquareFill_default as default
};
