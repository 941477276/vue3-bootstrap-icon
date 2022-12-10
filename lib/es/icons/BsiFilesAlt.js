// src/icons/BsiFilesAlt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilesAlt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "files-alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z" }, "children": [] }]
  });
};
BsiFilesAlt.displayName = "BsiFilesAlt";
var BsiFilesAlt_default = BsiFilesAlt;
export {
  BsiFilesAlt,
  BsiFilesAlt_default as default
};
