// src/icons/BsiCaretLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" }, "children": [] }]
  });
};
BsiCaretLeft.displayName = "BsiCaretLeft";
var BsiCaretLeft_default = BsiCaretLeft;
export {
  BsiCaretLeft,
  BsiCaretLeft_default as default
};
