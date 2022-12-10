// src/icons/BsiBatteryHalf.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBatteryHalf = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "battery-half",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 6h5v4H2V6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" }, "children": [] }]
  });
};
BsiBatteryHalf.displayName = "BsiBatteryHalf";
var BsiBatteryHalf_default = BsiBatteryHalf;
export {
  BsiBatteryHalf,
  BsiBatteryHalf_default as default
};
