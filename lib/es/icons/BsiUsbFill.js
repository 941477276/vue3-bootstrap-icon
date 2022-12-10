// src/icons/BsiUsbFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsbFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H.5Zm1.75 1.5h11.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 7.75v-1a.25.25 0 0 1 .25-.25Z" }, "children": [] }]
  });
};
BsiUsbFill.displayName = "BsiUsbFill";
var BsiUsbFill_default = BsiUsbFill;
export {
  BsiUsbFill,
  BsiUsbFill_default as default
};
