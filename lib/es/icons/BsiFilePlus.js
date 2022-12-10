// src/icons/BsiFilePlus.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePlus = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-plus",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" }, "children": [] }]
  });
};
BsiFilePlus.displayName = "BsiFilePlus";
var BsiFilePlus_default = BsiFilePlus;
export {
  BsiFilePlus,
  BsiFilePlus_default as default
};
