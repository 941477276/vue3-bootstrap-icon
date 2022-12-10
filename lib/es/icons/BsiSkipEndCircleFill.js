// src/icons/BsiSkipEndCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipEndCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-end-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L6.79 5.093z" }, "children": [] }]
  });
};
BsiSkipEndCircleFill.displayName = "BsiSkipEndCircleFill";
var BsiSkipEndCircleFill_default = BsiSkipEndCircleFill;
export {
  BsiSkipEndCircleFill,
  BsiSkipEndCircleFill_default as default
};
