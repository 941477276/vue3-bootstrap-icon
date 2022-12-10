// src/icons/BsiPrescription2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPrescription2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "prescription2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 6h2v2h2v2H9v2H7v-2H5V8h2V6Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4H4ZM3 3h10V1H3v2Z" }, "children": [] }]
  });
};
BsiPrescription2.displayName = "BsiPrescription2";
var BsiPrescription2_default = BsiPrescription2;
export {
  BsiPrescription2,
  BsiPrescription2_default as default
};
