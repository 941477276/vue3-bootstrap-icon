// src/icons/BsiSignpost.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSignpost = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "signpost",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0zM12.532 5l1.666 2-1.666 2H2V5h10.532z" }, "children": [] }]
  });
};
BsiSignpost.displayName = "BsiSignpost";
var BsiSignpost_default = BsiSignpost;
export {
  BsiSignpost,
  BsiSignpost_default as default
};
