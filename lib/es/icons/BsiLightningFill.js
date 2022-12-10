// src/icons/BsiLightningFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLightningFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "lightning-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" }, "children": [] }]
  });
};
BsiLightningFill.displayName = "BsiLightningFill";
var BsiLightningFill_default = BsiLightningFill;
export {
  BsiLightningFill,
  BsiLightningFill_default as default
};
