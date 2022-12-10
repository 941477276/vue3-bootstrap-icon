// src/icons/BsiCircleHalf.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCircleHalf = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "circle-half",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" }, "children": [] }]
  });
};
BsiCircleHalf.displayName = "BsiCircleHalf";
var BsiCircleHalf_default = BsiCircleHalf;
export {
  BsiCircleHalf,
  BsiCircleHalf_default as default
};
