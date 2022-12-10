// src/icons/BsiUsbMicro.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbMicro = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-micro",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.707 4A1 1 0 0 0 2 4.293L.293 6A1 1 0 0 0 0 6.707V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.707A1 1 0 0 0 15.707 6L14 4.293A1 1 0 0 0 13.293 4H2.707Zm0 1h10.586L15 6.707V11H1V6.707L2.707 5Z" }, "children": [] }]
  });
};
BsiUsbMicro.displayName = "BsiUsbMicro";
var BsiUsbMicro_default = BsiUsbMicro;
export {
  BsiUsbMicro,
  BsiUsbMicro_default as default
};
