// src/icons/BsiPip.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPip = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pip",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" }, "children": [] }]
  });
};
BsiPip.displayName = "BsiPip";
var BsiPip_default = BsiPip;
export {
  BsiPip,
  BsiPip_default as default
};
