// src/icons/BsiExclude.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiExclude = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "exclude",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4z" }, "children": [] }]
  });
};
BsiExclude.displayName = "BsiExclude";
var BsiExclude_default = BsiExclude;
export {
  BsiExclude,
  BsiExclude_default as default
};
