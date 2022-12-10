// src/icons/BsiThunderboltFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiThunderboltFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "thunderbolt-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1H1Zm2.5 3h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" }, "children": [] }]
  });
};
BsiThunderboltFill.displayName = "BsiThunderboltFill";
var BsiThunderboltFill_default = BsiThunderboltFill;
export {
  BsiThunderboltFill,
  BsiThunderboltFill_default as default
};
