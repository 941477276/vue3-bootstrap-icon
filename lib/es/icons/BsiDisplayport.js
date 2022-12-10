// src/icons/BsiDisplayport.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDisplayport = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "displayport",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V8h10v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-11Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 1h14v4H2.618L1 9.191V6Z" }, "children": [] }]
  });
};
BsiDisplayport.displayName = "BsiDisplayport";
var BsiDisplayport_default = BsiDisplayport;
export {
  BsiDisplayport,
  BsiDisplayport_default as default
};
