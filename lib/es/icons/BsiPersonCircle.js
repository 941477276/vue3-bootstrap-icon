// src/icons/BsiPersonCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" }, "children": [] }]
  });
};
BsiPersonCircle.displayName = "BsiPersonCircle";
var BsiPersonCircle_default = BsiPersonCircle;
export {
  BsiPersonCircle,
  BsiPersonCircle_default as default
};
