// src/icons/BsiClipboardPlusFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiClipboardPlusFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "clipboard-plus-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0Z" }, "children": [] }]
  });
};
BsiClipboardPlusFill.displayName = "BsiClipboardPlusFill";
var BsiClipboardPlusFill_default = BsiClipboardPlusFill;
export {
  BsiClipboardPlusFill,
  BsiClipboardPlusFill_default as default
};
