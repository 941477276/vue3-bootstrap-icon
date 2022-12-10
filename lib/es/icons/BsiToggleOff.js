// src/icons/BsiToggleOff.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiToggleOff = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "toggle-off",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" }, "children": [] }]
  });
};
BsiToggleOff.displayName = "BsiToggleOff";
var BsiToggleOff_default = BsiToggleOff;
export {
  BsiToggleOff,
  BsiToggleOff_default as default
};
