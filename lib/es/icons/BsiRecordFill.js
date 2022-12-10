// src/icons/BsiRecordFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecordFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" }, "children": [] }]
  });
};
BsiRecordFill.displayName = "BsiRecordFill";
var BsiRecordFill_default = BsiRecordFill;
export {
  BsiRecordFill,
  BsiRecordFill_default as default
};
