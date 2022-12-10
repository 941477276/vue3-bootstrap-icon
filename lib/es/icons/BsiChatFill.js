// src/icons/BsiChatFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" }, "children": [] }]
  });
};
BsiChatFill.displayName = "BsiChatFill";
var BsiChatFill_default = BsiChatFill;
export {
  BsiChatFill,
  BsiChatFill_default as default
};
