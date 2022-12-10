// src/icons/BsiCaretLeftFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretLeftFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-left-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" }, "children": [] }]
  });
};
BsiCaretLeftFill.displayName = "BsiCaretLeftFill";
var BsiCaretLeftFill_default = BsiCaretLeftFill;
export {
  BsiCaretLeftFill,
  BsiCaretLeftFill_default as default
};
