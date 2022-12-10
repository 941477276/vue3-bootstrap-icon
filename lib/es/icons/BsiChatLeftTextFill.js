// src/icons/BsiChatLeftTextFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatLeftTextFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-left-text-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" }, "children": [] }]
  });
};
BsiChatLeftTextFill.displayName = "BsiChatLeftTextFill";
var BsiChatLeftTextFill_default = BsiChatLeftTextFill;
export {
  BsiChatLeftTextFill,
  BsiChatLeftTextFill_default as default
};
