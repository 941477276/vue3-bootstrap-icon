// src/icons/BsiCloudFogFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudFogFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-fog-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973z" }, "children": [] }]
  });
};
BsiCloudFogFill.displayName = "BsiCloudFogFill";
var BsiCloudFogFill_default = BsiCloudFogFill;
export {
  BsiCloudFogFill,
  BsiCloudFogFill_default as default
};
