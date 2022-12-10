// src/icons/BsiUsbDrive.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbDrive = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-drive",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM6 5a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 6.5 16h4a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1H6Zm0 1h5v8.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V6Z" }, "children": [] }]
  });
};
BsiUsbDrive.displayName = "BsiUsbDrive";
var BsiUsbDrive_default = BsiUsbDrive;
export {
  BsiUsbDrive,
  BsiUsbDrive_default as default
};
