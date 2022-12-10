// src/icons/BsiSlashSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlashSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708z" }, "children": [] }]
  });
};
BsiSlashSquareFill.displayName = "BsiSlashSquareFill";
var BsiSlashSquareFill_default = BsiSlashSquareFill;
export {
  BsiSlashSquareFill,
  BsiSlashSquareFill_default as default
};
