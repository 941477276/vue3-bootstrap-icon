// src/icons/BsiList.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiList = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "list",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiList.displayName = "BsiList";
var BsiList_default = BsiList;
export {
  BsiList,
  BsiList_default as default
};
