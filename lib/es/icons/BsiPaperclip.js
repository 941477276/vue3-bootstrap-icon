// src/icons/BsiPaperclip.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPaperclip = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "paperclip",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" }, "children": [] }]
  });
};
BsiPaperclip.displayName = "BsiPaperclip";
var BsiPaperclip_default = BsiPaperclip;
export {
  BsiPaperclip,
  BsiPaperclip_default as default
};
