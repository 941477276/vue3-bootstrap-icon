// src/icons/BsiCashStack.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCashStack = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cash-stack",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" }, "children": [] }]
  });
};
BsiCashStack.displayName = "BsiCashStack";
var BsiCashStack_default = BsiCashStack;
export {
  BsiCashStack,
  BsiCashStack_default as default
};
