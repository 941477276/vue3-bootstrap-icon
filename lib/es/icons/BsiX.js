// src/icons/BsiX.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiX = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "x",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiX.displayName = "BsiX";
var BsiX_default = BsiX;
export {
  BsiX,
  BsiX_default as default
};
