// src/icons/BsiSkipForwardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipForwardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-forward-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiSkipForwardFill.displayName = "BsiSkipForwardFill";
var BsiSkipForwardFill_default = BsiSkipForwardFill;
export {
  BsiSkipForwardFill,
  BsiSkipForwardFill_default as default
};
