// src/icons/BsiArrowDownLeftSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownLeftSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-left-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.096 3.146a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z" }, "children": [] }]
  });
};
BsiArrowDownLeftSquare.displayName = "BsiArrowDownLeftSquare";
var BsiArrowDownLeftSquare_default = BsiArrowDownLeftSquare;
export {
  BsiArrowDownLeftSquare,
  BsiArrowDownLeftSquare_default as default
};
