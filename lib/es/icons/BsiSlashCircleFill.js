// src/icons/BsiSlashCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlashCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z" }, "children": [] }]
  });
};
BsiSlashCircleFill.displayName = "BsiSlashCircleFill";
var BsiSlashCircleFill_default = BsiSlashCircleFill;
export {
  BsiSlashCircleFill,
  BsiSlashCircleFill_default as default
};
