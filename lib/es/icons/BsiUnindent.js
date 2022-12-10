// src/icons/BsiUnindent.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUnindent = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "unindent",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z" }, "children": [] }]
  });
};
BsiUnindent.displayName = "BsiUnindent";
var BsiUnindent_default = BsiUnindent;
export {
  BsiUnindent,
  BsiUnindent_default as default
};
