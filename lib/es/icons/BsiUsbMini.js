// src/icons/BsiUsbMini.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbMini = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-mini",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1H3Zm0 1h10v1.293a1 1 0 0 0 .293.707L15 7.707V12H1V7.707L2.707 6A1 1 0 0 0 3 5.293V4Z" }, "children": [] }]
  });
};
BsiUsbMini.displayName = "BsiUsbMini";
var BsiUsbMini_default = BsiUsbMini;
export {
  BsiUsbMini,
  BsiUsbMini_default as default
};
