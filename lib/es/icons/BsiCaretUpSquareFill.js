// src/icons/BsiCaretUpSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretUpSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-up-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z" }, "children": [] }]
  });
};
BsiCaretUpSquareFill.displayName = "BsiCaretUpSquareFill";
var BsiCaretUpSquareFill_default = BsiCaretUpSquareFill;
export {
  BsiCaretUpSquareFill,
  BsiCaretUpSquareFill_default as default
};
