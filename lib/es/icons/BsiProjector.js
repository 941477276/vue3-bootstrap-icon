// src/icons/BsiProjector.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiProjector = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "projector",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Z" }, "children": [] }]
  });
};
BsiProjector.displayName = "BsiProjector";
var BsiProjector_default = BsiProjector;
export {
  BsiProjector,
  BsiProjector_default as default
};
