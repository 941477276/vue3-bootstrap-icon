// src/icons/BsiArrowDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" }, "children": [] }]
  });
};
BsiArrowDown.displayName = "BsiArrowDown";
var BsiArrowDown_default = BsiArrowDown;
export {
  BsiArrowDown,
  BsiArrowDown_default as default
};
