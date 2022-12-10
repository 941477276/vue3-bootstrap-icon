// src/icons/BsiChatLeftFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatLeftFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-left-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }]
  });
};
BsiChatLeftFill.displayName = "BsiChatLeftFill";
var BsiChatLeftFill_default = BsiChatLeftFill;
export {
  BsiChatLeftFill,
  BsiChatLeftFill_default as default
};
