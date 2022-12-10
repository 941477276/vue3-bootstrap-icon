// src/icons/BsiRecordBtnFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecordBtnFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record-btn-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, "children": [] }]
  });
};
BsiRecordBtnFill.displayName = "BsiRecordBtnFill";
var BsiRecordBtnFill_default = BsiRecordBtnFill;
export {
  BsiRecordBtnFill,
  BsiRecordBtnFill_default as default
};
