// src/icons/BsiArrowLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" }, "children": [] }]
  });
};
BsiArrowLeft.displayName = "BsiArrowLeft";
var BsiArrowLeft_default = BsiArrowLeft;
export {
  BsiArrowLeft,
  BsiArrowLeft_default as default
};
