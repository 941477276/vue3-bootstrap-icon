// src/icons/BsiEmojiDizzyFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEmojiDizzyFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "emoji-dizzy-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" }, "children": [] }]
  });
};
BsiEmojiDizzyFill.displayName = "BsiEmojiDizzyFill";
var BsiEmojiDizzyFill_default = BsiEmojiDizzyFill;
export {
  BsiEmojiDizzyFill,
  BsiEmojiDizzyFill_default as default
};
