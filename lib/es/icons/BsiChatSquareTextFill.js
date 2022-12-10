// src/icons/BsiChatSquareTextFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatSquareTextFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-square-text-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" }, "children": [] }]
  });
};
BsiChatSquareTextFill.displayName = "BsiChatSquareTextFill";
var BsiChatSquareTextFill_default = BsiChatSquareTextFill;
export {
  BsiChatSquareTextFill,
  BsiChatSquareTextFill_default as default
};
