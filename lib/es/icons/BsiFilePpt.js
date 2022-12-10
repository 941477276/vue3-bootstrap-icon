// src/icons/BsiFilePpt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePpt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-ppt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z" }, "children": [] }]
  });
};
BsiFilePpt.displayName = "BsiFilePpt";
var BsiFilePpt_default = BsiFilePpt;
export {
  BsiFilePpt,
  BsiFilePpt_default as default
};
