// src/icons/BsiFileEarmarkSpreadsheet.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkSpreadsheet = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-spreadsheet",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z" }, "children": [] }]
  });
};
BsiFileEarmarkSpreadsheet.displayName = "BsiFileEarmarkSpreadsheet";
var BsiFileEarmarkSpreadsheet_default = BsiFileEarmarkSpreadsheet;
export {
  BsiFileEarmarkSpreadsheet,
  BsiFileEarmarkSpreadsheet_default as default
};
