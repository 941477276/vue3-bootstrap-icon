// src/icons/BsiSlashSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSlashSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "slash-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" }, "children": [] }]
  });
};
BsiSlashSquare.displayName = "BsiSlashSquare";
var BsiSlashSquare_default = BsiSlashSquare;
export {
  BsiSlashSquare,
  BsiSlashSquare_default as default
};
