// src/icons/BsiVolumeOffFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiVolumeOffFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "volume-off-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" }, "children": [] }]
  });
};
BsiVolumeOffFill.displayName = "BsiVolumeOffFill";
var BsiVolumeOffFill_default = BsiVolumeOffFill;
export {
  BsiVolumeOffFill,
  BsiVolumeOffFill_default as default
};
