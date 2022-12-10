// src/icons/BsiPower.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPower = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "power",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.5 1v7h1V1h-1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" }, "children": [] }]
  });
};
BsiPower.displayName = "BsiPower";
var BsiPower_default = BsiPower;
export {
  BsiPower,
  BsiPower_default as default
};
