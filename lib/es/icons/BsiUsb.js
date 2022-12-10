// src/icons/BsiUsb.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUsb = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "usb",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z" }, "children": [] }]
  });
};
BsiUsb.displayName = "BsiUsb";
var BsiUsb_default = BsiUsb;
export {
  BsiUsb,
  BsiUsb_default as default
};
