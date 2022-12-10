// src/icons/BsiChatRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" }, "children": [] }]
  });
};
BsiChatRight.displayName = "BsiChatRight";
var BsiChatRight_default = BsiChatRight;
export {
  BsiChatRight,
  BsiChatRight_default as default
};
