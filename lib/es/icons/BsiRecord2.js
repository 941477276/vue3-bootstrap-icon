// src/icons/BsiRecord2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiRecord2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "record2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }, "children": [] }]
  });
};
BsiRecord2.displayName = "BsiRecord2";
var BsiRecord2_default = BsiRecord2;
export {
  BsiRecord2,
  BsiRecord2_default as default
};
