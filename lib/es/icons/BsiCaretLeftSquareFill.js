// src/icons/BsiCaretLeftSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretLeftSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-left-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" }, "children": [] }]
  });
};
BsiCaretLeftSquareFill.displayName = "BsiCaretLeftSquareFill";
var BsiCaretLeftSquareFill_default = BsiCaretLeftSquareFill;
export {
  BsiCaretLeftSquareFill,
  BsiCaretLeftSquareFill_default as default
};
