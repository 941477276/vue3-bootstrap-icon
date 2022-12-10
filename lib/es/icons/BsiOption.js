// src/icons/BsiOption.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiOption = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "option",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5zm10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiOption.displayName = "BsiOption";
var BsiOption_default = BsiOption;
export {
  BsiOption,
  BsiOption_default as default
};
