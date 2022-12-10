// src/icons/BsiCaretRightFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretRightFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-right-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" }, "children": [] }]
  });
};
BsiCaretRightFill.displayName = "BsiCaretRightFill";
var BsiCaretRightFill_default = BsiCaretRightFill;
export {
  BsiCaretRightFill,
  BsiCaretRightFill_default as default
};
