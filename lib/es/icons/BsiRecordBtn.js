// src/icons/BsiRecordBtn.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecordBtn = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record-btn",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" }, "children": [] }]
  });
};
BsiRecordBtn.displayName = "BsiRecordBtn";
var BsiRecordBtn_default = BsiRecordBtn;
export {
  BsiRecordBtn,
  BsiRecordBtn_default as default
};
