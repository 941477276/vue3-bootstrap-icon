// src/icons/BsiCodeSlash.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCodeSlash = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "code-slash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" }, "children": [] }]
  });
};
BsiCodeSlash.displayName = "BsiCodeSlash";
var BsiCodeSlash_default = BsiCodeSlash;
export {
  BsiCodeSlash,
  BsiCodeSlash_default as default
};
