// src/icons/BsiChatLeftDotsFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatLeftDotsFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-left-dots-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }, "children": [] }]
  });
};
BsiChatLeftDotsFill.displayName = "BsiChatLeftDotsFill";
var BsiChatLeftDotsFill_default = BsiChatLeftDotsFill;
export {
  BsiChatLeftDotsFill,
  BsiChatLeftDotsFill_default as default
};
