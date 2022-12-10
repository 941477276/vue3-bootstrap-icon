// src/icons/BsiChevronDoubleUp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronDoubleUp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-double-up",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" }, "children": [] }]
  });
};
BsiChevronDoubleUp.displayName = "BsiChevronDoubleUp";
var BsiChevronDoubleUp_default = BsiChevronDoubleUp;
export {
  BsiChevronDoubleUp,
  BsiChevronDoubleUp_default as default
};
