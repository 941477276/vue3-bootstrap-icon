// src/icons/BsiCheckCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheckCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" }, "children": [] }]
  });
};
BsiCheckCircleFill.displayName = "BsiCheckCircleFill";
var BsiCheckCircleFill_default = BsiCheckCircleFill;
export {
  BsiCheckCircleFill,
  BsiCheckCircleFill_default as default
};
