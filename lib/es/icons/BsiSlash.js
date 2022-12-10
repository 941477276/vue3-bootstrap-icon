// src/icons/BsiSlash.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlash = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" }, "children": [] }]
  });
};
BsiSlash.displayName = "BsiSlash";
var BsiSlash_default = BsiSlash;
export {
  BsiSlash,
  BsiSlash_default as default
};
