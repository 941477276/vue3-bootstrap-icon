// src/icons/BsiChevronBarUp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarUp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-up",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z" }, "children": [] }]
  });
};
BsiChevronBarUp.displayName = "BsiChevronBarUp";
var BsiChevronBarUp_default = BsiChevronBarUp;
export {
  BsiChevronBarUp,
  BsiChevronBarUp_default as default
};
