// src/icons/BsiChatSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }]
  });
};
BsiChatSquareFill.displayName = "BsiChatSquareFill";
var BsiChatSquareFill_default = BsiChatSquareFill;
export {
  BsiChatSquareFill,
  BsiChatSquareFill_default as default
};
