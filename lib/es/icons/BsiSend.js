// src/icons/BsiSend.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSend = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "send",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" }, "children": [] }]
  });
};
BsiSend.displayName = "BsiSend";
var BsiSend_default = BsiSend;
export {
  BsiSend,
  BsiSend_default as default
};
