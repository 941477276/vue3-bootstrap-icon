// src/icons/BsiChevronBarContract.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarContract = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-contract",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z" }, "children": [] }]
  });
};
BsiChevronBarContract.displayName = "BsiChevronBarContract";
var BsiChevronBarContract_default = BsiChevronBarContract;
export {
  BsiChevronBarContract,
  BsiChevronBarContract_default as default
};
