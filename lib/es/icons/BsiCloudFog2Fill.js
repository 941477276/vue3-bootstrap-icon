// src/icons/BsiCloudFog2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudFog2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-fog2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z" }, "children": [] }]
  });
};
BsiCloudFog2Fill.displayName = "BsiCloudFog2Fill";
var BsiCloudFog2Fill_default = BsiCloudFog2Fill;
export {
  BsiCloudFog2Fill,
  BsiCloudFog2Fill_default as default
};
