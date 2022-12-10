// src/icons/BsiChatRightFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatRightFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-right-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" }, "children": [] }]
  });
};
BsiChatRightFill.displayName = "BsiChatRightFill";
var BsiChatRightFill_default = BsiChatRightFill;
export {
  BsiChatRightFill,
  BsiChatRightFill_default as default
};
