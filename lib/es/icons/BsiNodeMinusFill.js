// src/icons/BsiNodeMinusFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiNodeMinusFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "node-minus-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M16 8a5 5 0 0 1-9.975.5H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025A5 5 0 0 1 16 8zm-2 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 14 8z" }, "children": [] }]
  });
};
BsiNodeMinusFill.displayName = "BsiNodeMinusFill";
var BsiNodeMinusFill_default = BsiNodeMinusFill;
export {
  BsiNodeMinusFill,
  BsiNodeMinusFill_default as default
};
