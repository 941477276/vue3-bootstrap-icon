// src/icons/BsiCloudHaze2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudHaze2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-haze2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiCloudHaze2.displayName = "BsiCloudHaze2";
var BsiCloudHaze2_default = BsiCloudHaze2;
export {
  BsiCloudHaze2,
  BsiCloudHaze2_default as default
};
