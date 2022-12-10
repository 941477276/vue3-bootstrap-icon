// src/icons/BsiCreditCardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCreditCardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "credit-card-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiCreditCardFill.displayName = "BsiCreditCardFill";
var BsiCreditCardFill_default = BsiCreditCardFill;
export {
  BsiCreditCardFill,
  BsiCreditCardFill_default as default
};
