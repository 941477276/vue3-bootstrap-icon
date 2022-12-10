// src/icons/BsiRecordCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecordCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" }, "children": [] }]
  });
};
BsiRecordCircle.displayName = "BsiRecordCircle";
var BsiRecordCircle_default = BsiRecordCircle;
export {
  BsiRecordCircle,
  BsiRecordCircle_default as default
};
