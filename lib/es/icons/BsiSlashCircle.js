// src/icons/BsiSlashCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlashCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" }, "children": [] }]
  });
};
BsiSlashCircle.displayName = "BsiSlashCircle";
var BsiSlashCircle_default = BsiSlashCircle;
export {
  BsiSlashCircle,
  BsiSlashCircle_default as default
};
