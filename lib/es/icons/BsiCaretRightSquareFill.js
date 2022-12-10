// src/icons/BsiCaretRightSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretRightSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-right-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" }, "children": [] }]
  });
};
BsiCaretRightSquareFill.displayName = "BsiCaretRightSquareFill";
var BsiCaretRightSquareFill_default = BsiCaretRightSquareFill;
export {
  BsiCaretRightSquareFill,
  BsiCaretRightSquareFill_default as default
};
