// src/icons/BsiPersonLinesFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonLinesFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-lines-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" }, "children": [] }]
  });
};
BsiPersonLinesFill.displayName = "BsiPersonLinesFill";
var BsiPersonLinesFill_default = BsiPersonLinesFill;
export {
  BsiPersonLinesFill,
  BsiPersonLinesFill_default as default
};
