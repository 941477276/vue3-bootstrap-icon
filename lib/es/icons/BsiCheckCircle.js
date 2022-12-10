// src/icons/BsiCheckCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheckCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" }, "children": [] }]
  });
};
BsiCheckCircle.displayName = "BsiCheckCircle";
var BsiCheckCircle_default = BsiCheckCircle;
export {
  BsiCheckCircle,
  BsiCheckCircle_default as default
};
