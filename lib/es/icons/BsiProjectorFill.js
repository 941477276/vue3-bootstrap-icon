// src/icons/BsiProjectorFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiProjectorFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "projector-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z" }, "children": [] }]
  });
};
BsiProjectorFill.displayName = "BsiProjectorFill";
var BsiProjectorFill_default = BsiProjectorFill;
export {
  BsiProjectorFill,
  BsiProjectorFill_default as default
};
