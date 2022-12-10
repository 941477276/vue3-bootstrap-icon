// src/icons/BsiChatLeftHeart.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatLeftHeart = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-left-heart",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" }, "children": [] }]
  });
};
BsiChatLeftHeart.displayName = "BsiChatLeftHeart";
var BsiChatLeftHeart_default = BsiChatLeftHeart;
export {
  BsiChatLeftHeart,
  BsiChatLeftHeart_default as default
};
