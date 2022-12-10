// src/icons/BsiLightningChargeFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLightningChargeFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "lightning-charge-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" }, "children": [] }]
  });
};
BsiLightningChargeFill.displayName = "BsiLightningChargeFill";
var BsiLightningChargeFill_default = BsiLightningChargeFill;
export {
  BsiLightningChargeFill,
  BsiLightningChargeFill_default as default
};
