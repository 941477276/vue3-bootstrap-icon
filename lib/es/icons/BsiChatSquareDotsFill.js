// src/icons/BsiChatSquareDotsFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChatSquareDotsFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chat-square-dots-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }, "children": [] }]
  });
};
BsiChatSquareDotsFill.displayName = "BsiChatSquareDotsFill";
var BsiChatSquareDotsFill_default = BsiChatSquareDotsFill;
export {
  BsiChatSquareDotsFill,
  BsiChatSquareDotsFill_default as default
};
