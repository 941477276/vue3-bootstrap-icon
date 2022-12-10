// src/icons/BsiSkipEndFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipEndFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-end-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" }, "children": [] }]
  });
};
BsiSkipEndFill.displayName = "BsiSkipEndFill";
var BsiSkipEndFill_default = BsiSkipEndFill;
export {
  BsiSkipEndFill,
  BsiSkipEndFill_default as default
};
