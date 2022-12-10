// src/icons/BsiFiles.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFiles = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "files",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" }, "children": [] }]
  });
};
BsiFiles.displayName = "BsiFiles";
var BsiFiles_default = BsiFiles;
export {
  BsiFiles,
  BsiFiles_default as default
};
