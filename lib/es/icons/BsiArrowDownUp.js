// src/icons/BsiArrowDownUp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownUp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-up",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiArrowDownUp.displayName = "BsiArrowDownUp";
var BsiArrowDownUp_default = BsiArrowDownUp;
export {
  BsiArrowDownUp,
  BsiArrowDownUp_default as default
};
