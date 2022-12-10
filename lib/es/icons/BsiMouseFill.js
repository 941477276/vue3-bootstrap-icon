// src/icons/BsiMouseFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMouseFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "mouse-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z" }, "children": [] }]
  });
};
BsiMouseFill.displayName = "BsiMouseFill";
var BsiMouseFill_default = BsiMouseFill;
export {
  BsiMouseFill,
  BsiMouseFill_default as default
};
