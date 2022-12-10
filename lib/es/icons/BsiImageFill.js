// src/icons/BsiImageFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiImageFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "image-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, "children": [] }]
  });
};
BsiImageFill.displayName = "BsiImageFill";
var BsiImageFill_default = BsiImageFill;
export {
  BsiImageFill,
  BsiImageFill_default as default
};
