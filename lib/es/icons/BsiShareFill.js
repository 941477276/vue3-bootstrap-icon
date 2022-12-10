// src/icons/BsiShareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiShareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "share-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" }, "children": [] }]
  });
};
BsiShareFill.displayName = "BsiShareFill";
var BsiShareFill_default = BsiShareFill;
export {
  BsiShareFill,
  BsiShareFill_default as default
};
