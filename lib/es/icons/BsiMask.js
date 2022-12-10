// src/icons/BsiMask.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMask = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "mask",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546zM4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z" }, "children": [] }]
  });
};
BsiMask.displayName = "BsiMask";
var BsiMask_default = BsiMask;
export {
  BsiMask,
  BsiMask_default as default
};
