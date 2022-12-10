// src/icons/BsiRecord.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecord = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" }, "children": [] }]
  });
};
BsiRecord.displayName = "BsiRecord";
var BsiRecord_default = BsiRecord;
export {
  BsiRecord,
  BsiRecord_default as default
};
