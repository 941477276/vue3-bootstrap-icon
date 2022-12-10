// src/icons/BsiPlus.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlus = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "plus",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }, "children": [] }]
  });
};
BsiPlus.displayName = "BsiPlus";
var BsiPlus_default = BsiPlus;
export {
  BsiPlus,
  BsiPlus_default as default
};
