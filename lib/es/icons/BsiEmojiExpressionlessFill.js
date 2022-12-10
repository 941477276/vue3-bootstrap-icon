// src/icons/BsiEmojiExpressionlessFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEmojiExpressionlessFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "emoji-expressionless-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiEmojiExpressionlessFill.displayName = "BsiEmojiExpressionlessFill";
var BsiEmojiExpressionlessFill_default = BsiEmojiExpressionlessFill;
export {
  BsiEmojiExpressionlessFill,
  BsiEmojiExpressionlessFill_default as default
};
