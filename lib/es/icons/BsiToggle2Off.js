// src/icons/BsiToggle2Off.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiToggle2Off = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "toggle2-off",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z" }, "children": [] }]
  });
};
BsiToggle2Off.displayName = "BsiToggle2Off";
var BsiToggle2Off_default = BsiToggle2Off;
export {
  BsiToggle2Off,
  BsiToggle2Off_default as default
};
