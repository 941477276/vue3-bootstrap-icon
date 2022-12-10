// src/icons/BsiPlusCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlusCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "plus-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" }, "children": [] }]
  });
};
BsiPlusCircleFill.displayName = "BsiPlusCircleFill";
var BsiPlusCircleFill_default = BsiPlusCircleFill;
export {
  BsiPlusCircleFill,
  BsiPlusCircleFill_default as default
};
