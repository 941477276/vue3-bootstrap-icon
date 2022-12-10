// src/icons/BsiCone.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCone = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cone",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z" }, "children": [] }]
  });
};
BsiCone.displayName = "BsiCone";
var BsiCone_default = BsiCone;
export {
  BsiCone,
  BsiCone_default as default
};
