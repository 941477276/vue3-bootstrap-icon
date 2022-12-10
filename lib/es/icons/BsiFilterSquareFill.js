// src/icons/BsiFilterSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilterSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filter-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiFilterSquareFill.displayName = "BsiFilterSquareFill";
var BsiFilterSquareFill_default = BsiFilterSquareFill;
export {
  BsiFilterSquareFill,
  BsiFilterSquareFill_default as default
};
