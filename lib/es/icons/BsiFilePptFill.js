// src/icons/BsiFilePptFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePptFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-ppt-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.188 8.5H7V5h1.188a1.75 1.75 0 1 1 0 3.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm3 4a1 1 0 0 0-1 1v6.5a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z" }, "children": [] }]
  });
};
BsiFilePptFill.displayName = "BsiFilePptFill";
var BsiFilePptFill_default = BsiFilePptFill;
export {
  BsiFilePptFill,
  BsiFilePptFill_default as default
};
