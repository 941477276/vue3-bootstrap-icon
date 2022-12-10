// src/icons/BsiLightningCharge.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLightningCharge = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "lightning-charge",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" }, "children": [] }]
  });
};
BsiLightningCharge.displayName = "BsiLightningCharge";
var BsiLightningCharge_default = BsiLightningCharge;
export {
  BsiLightningCharge,
  BsiLightningCharge_default as default
};
