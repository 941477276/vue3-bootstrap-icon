// src/icons/BsiBack.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBack = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "back",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" }, "children": [] }]
  });
};
BsiBack.displayName = "BsiBack";
var BsiBack_default = BsiBack;
export {
  BsiBack,
  BsiBack_default as default
};
