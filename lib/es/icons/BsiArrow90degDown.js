// src/icons/BsiArrow90degDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrow90degDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-90deg-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" }, "children": [] }]
  });
};
BsiArrow90degDown.displayName = "BsiArrow90degDown";
var BsiArrow90degDown_default = BsiArrow90degDown;
export {
  BsiArrow90degDown,
  BsiArrow90degDown_default as default
};
