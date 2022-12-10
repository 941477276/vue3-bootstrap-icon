// src/icons/BsiChevronContract.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronContract = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-contract",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiChevronContract.displayName = "BsiChevronContract";
var BsiChevronContract_default = BsiChevronContract;
export {
  BsiChevronContract,
  BsiChevronContract_default as default
};
