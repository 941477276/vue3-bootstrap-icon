// src/icons/BsiCreditCard.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCreditCard = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "credit-card",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" }, "children": [] }]
  });
};
BsiCreditCard.displayName = "BsiCreditCard";
var BsiCreditCard_default = BsiCreditCard;
export {
  BsiCreditCard,
  BsiCreditCard_default as default
};
