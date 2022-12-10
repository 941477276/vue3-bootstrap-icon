// src/icons/BsiHdmi.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHdmi = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "hdmi",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1V6Z" }, "children": [] }]
  });
};
BsiHdmi.displayName = "BsiHdmi";
var BsiHdmi_default = BsiHdmi;
export {
  BsiHdmi,
  BsiHdmi_default as default
};
