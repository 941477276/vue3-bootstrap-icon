// src/icons/BsiFileMinus.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileMinus = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-minus",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiFileMinus.displayName = "BsiFileMinus";
var BsiFileMinus_default = BsiFileMinus;
export {
  BsiFileMinus,
  BsiFileMinus_default as default
};
