// src/icons/BsiSegmentedNav.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSegmentedNav = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "segmented-nav",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z" }, "children": [] }]
  });
};
BsiSegmentedNav.displayName = "BsiSegmentedNav";
var BsiSegmentedNav_default = BsiSegmentedNav;
export {
  BsiSegmentedNav,
  BsiSegmentedNav_default as default
};
