// src/icons/BsiRewindCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRewindCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "rewind-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7.729 5.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038Z" }, "children": [] }]
  });
};
BsiRewindCircleFill.displayName = "BsiRewindCircleFill";
var BsiRewindCircleFill_default = BsiRewindCircleFill;
export {
  BsiRewindCircleFill,
  BsiRewindCircleFill_default as default
};
