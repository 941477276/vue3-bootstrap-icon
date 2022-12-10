// src/icons/BsiXLg.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiXLg = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "x-lg",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, "children": [] }]
  });
};
BsiXLg.displayName = "BsiXLg";
var BsiXLg_default = BsiXLg;
export {
  BsiXLg,
  BsiXLg_default as default
};
