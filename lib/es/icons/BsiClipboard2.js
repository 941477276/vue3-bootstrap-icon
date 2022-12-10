// src/icons/BsiClipboard2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiClipboard2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "clipboard2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" }, "children": [] }]
  });
};
BsiClipboard2.displayName = "BsiClipboard2";
var BsiClipboard2_default = BsiClipboard2;
export {
  BsiClipboard2,
  BsiClipboard2_default as default
};
