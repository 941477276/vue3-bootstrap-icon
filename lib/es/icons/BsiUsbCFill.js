// src/icons/BsiUsbCFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbCFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-c-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Z" }, "children": [] }]
  });
};
BsiUsbCFill.displayName = "BsiUsbCFill";
var BsiUsbCFill_default = BsiUsbCFill;
export {
  BsiUsbCFill,
  BsiUsbCFill_default as default
};
