// src/icons/BsiArrow90degUp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrow90degUp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-90deg-up",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z" }, "children": [] }]
  });
};
BsiArrow90degUp.displayName = "BsiArrow90degUp";
var BsiArrow90degUp_default = BsiArrow90degUp;
export {
  BsiArrow90degUp,
  BsiArrow90degUp_default as default
};
