// src/icons/BsiDash.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDash = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }, "children": [] }]
  });
};
BsiDash.displayName = "BsiDash";
var BsiDash_default = BsiDash;
export {
  BsiDash,
  BsiDash_default as default
};
