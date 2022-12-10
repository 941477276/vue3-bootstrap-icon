// src/icons/BsiFileEarmarkFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" }, "children": [] }]
  });
};
BsiFileEarmarkFill.displayName = "BsiFileEarmarkFill";
var BsiFileEarmarkFill_default = BsiFileEarmarkFill;
export {
  BsiFileEarmarkFill,
  BsiFileEarmarkFill_default as default
};
