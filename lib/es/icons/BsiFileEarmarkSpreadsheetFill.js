// src/icons/BsiFileEarmarkSpreadsheetFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkSpreadsheetFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-spreadsheet-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 12v-2h3v2H6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" }, "children": [] }]
  });
};
BsiFileEarmarkSpreadsheetFill.displayName = "BsiFileEarmarkSpreadsheetFill";
var BsiFileEarmarkSpreadsheetFill_default = BsiFileEarmarkSpreadsheetFill;
export {
  BsiFileEarmarkSpreadsheetFill,
  BsiFileEarmarkSpreadsheetFill_default as default
};