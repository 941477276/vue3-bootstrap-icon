// src/icons/BsiGraphDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGraphDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "graph-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z" }, "children": [] }]
  });
};
BsiGraphDown.displayName = "BsiGraphDown";
var BsiGraphDown_default = BsiGraphDown;
export {
  BsiGraphDown,
  BsiGraphDown_default as default
};
