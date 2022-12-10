// src/icons/BsiDisplayFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDisplayFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "display-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z" }, "children": [] }]
  });
};
BsiDisplayFill.displayName = "BsiDisplayFill";
var BsiDisplayFill_default = BsiDisplayFill;
export {
  BsiDisplayFill,
  BsiDisplayFill_default as default
};
