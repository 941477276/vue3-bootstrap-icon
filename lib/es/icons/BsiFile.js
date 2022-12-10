// src/icons/BsiFile.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFile = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiFile.displayName = "BsiFile";
var BsiFile_default = BsiFile;
export {
  BsiFile,
  BsiFile_default as default
};
