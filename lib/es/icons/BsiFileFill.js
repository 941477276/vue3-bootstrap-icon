// src/icons/BsiFileFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" }, "children": [] }]
  });
};
BsiFileFill.displayName = "BsiFileFill";
var BsiFileFill_default = BsiFileFill;
export {
  BsiFileFill,
  BsiFileFill_default as default
};
