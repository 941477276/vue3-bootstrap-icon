// src/icons/BsiXCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiXCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "x-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" }, "children": [] }]
  });
};
BsiXCircleFill.displayName = "BsiXCircleFill";
var BsiXCircleFill_default = BsiXCircleFill;
export {
  BsiXCircleFill,
  BsiXCircleFill_default as default
};
