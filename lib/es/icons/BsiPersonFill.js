// src/icons/BsiPersonFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }, "children": [] }]
  });
};
BsiPersonFill.displayName = "BsiPersonFill";
var BsiPersonFill_default = BsiPersonFill;
export {
  BsiPersonFill,
  BsiPersonFill_default as default
};
