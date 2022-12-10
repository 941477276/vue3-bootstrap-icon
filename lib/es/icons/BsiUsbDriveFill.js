// src/icons/BsiUsbDriveFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbDriveFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-drive-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM5.5 5a.5.5 0 0 0-.5.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a.5.5 0 0 0-.5-.5h-6Z" }, "children": [] }]
  });
};
BsiUsbDriveFill.displayName = "BsiUsbDriveFill";
var BsiUsbDriveFill_default = BsiUsbDriveFill;
export {
  BsiUsbDriveFill,
  BsiUsbDriveFill_default as default
};
