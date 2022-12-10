// src/icons/BsiRecordCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecordCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, "children": [] }]
  });
};
BsiRecordCircleFill.displayName = "BsiRecordCircleFill";
var BsiRecordCircleFill_default = BsiRecordCircleFill;
export {
  BsiRecordCircleFill,
  BsiRecordCircleFill_default as default
};
