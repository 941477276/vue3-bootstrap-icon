// src/icons/BsiPersonXFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonXFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-x-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiPersonXFill.displayName = "BsiPersonXFill";
var BsiPersonXFill_default = BsiPersonXFill;
export {
  BsiPersonXFill,
  BsiPersonXFill_default as default
};
