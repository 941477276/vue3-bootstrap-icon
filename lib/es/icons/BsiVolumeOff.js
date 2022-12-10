// src/icons/BsiVolumeOff.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiVolumeOff = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "volume-off",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96V5.04z" }, "children": [] }]
  });
};
BsiVolumeOff.displayName = "BsiVolumeOff";
var BsiVolumeOff_default = BsiVolumeOff;
export {
  BsiVolumeOff,
  BsiVolumeOff_default as default
};
