// src/icons/BsiCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }]
  });
};
BsiCircle.displayName = "BsiCircle";
var BsiCircle_default = BsiCircle;
export {
  BsiCircle,
  BsiCircle_default as default
};
