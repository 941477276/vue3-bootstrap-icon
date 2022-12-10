// src/icons/BsiBattery.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBattery = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "battery",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" }, "children": [] }]
  });
};
BsiBattery.displayName = "BsiBattery";
var BsiBattery_default = BsiBattery;
export {
  BsiBattery,
  BsiBattery_default as default
};
