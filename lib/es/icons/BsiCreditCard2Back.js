// src/icons/BsiCreditCard2Back.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCreditCard2Back = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "credit-card-2-back",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" }, "children": [] }]
  });
};
BsiCreditCard2Back.displayName = "BsiCreditCard2Back";
var BsiCreditCard2Back_default = BsiCreditCard2Back;
export {
  BsiCreditCard2Back,
  BsiCreditCard2Back_default as default
};
