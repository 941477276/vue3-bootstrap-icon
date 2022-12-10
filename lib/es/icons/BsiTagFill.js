// src/icons/BsiTagFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTagFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "tag-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }]
  });
};
BsiTagFill.displayName = "BsiTagFill";
var BsiTagFill_default = BsiTagFill;
export {
  BsiTagFill,
  BsiTagFill_default as default
};
