// src/icons/BsiCloudFog.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudFog = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-fog",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" }, "children": [] }]
  });
};
BsiCloudFog.displayName = "BsiCloudFog";
var BsiCloudFog_default = BsiCloudFog;
export {
  BsiCloudFog,
  BsiCloudFog_default as default
};
