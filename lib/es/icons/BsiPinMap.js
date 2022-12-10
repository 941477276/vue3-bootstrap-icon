// src/icons/BsiPinMap.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPinMap = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pin-map",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" }, "children": [] }]
  });
};
BsiPinMap.displayName = "BsiPinMap";
var BsiPinMap_default = BsiPinMap;
export {
  BsiPinMap,
  BsiPinMap_default as default
};
