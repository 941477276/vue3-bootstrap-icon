// src/icons/BsiCloudHazeFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudHazeFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-haze-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z" }, "children": [] }]
  });
};
BsiCloudHazeFill.displayName = "BsiCloudHazeFill";
var BsiCloudHazeFill_default = BsiCloudHazeFill;
export {
  BsiCloudHazeFill,
  BsiCloudHazeFill_default as default
};
