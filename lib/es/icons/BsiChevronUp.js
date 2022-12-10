// src/icons/BsiChevronUp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronUp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-up",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" }, "children": [] }]
  });
};
BsiChevronUp.displayName = "BsiChevronUp";
var BsiChevronUp_default = BsiChevronUp;
export {
  BsiChevronUp,
  BsiChevronUp_default as default
};
