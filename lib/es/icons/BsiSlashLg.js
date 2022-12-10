// src/icons/BsiSlashLg.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlashLg = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash-lg",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" }, "children": [] }]
  });
};
BsiSlashLg.displayName = "BsiSlashLg";
var BsiSlashLg_default = BsiSlashLg;
export {
  BsiSlashLg,
  BsiSlashLg_default as default
};
