// src/icons/BsiDistributeHorizontal.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDistributeHorizontal = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "distribute-horizontal",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5zm-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z" }, "children": [] }]
  });
};
BsiDistributeHorizontal.displayName = "BsiDistributeHorizontal";
var BsiDistributeHorizontal_default = BsiDistributeHorizontal;
export {
  BsiDistributeHorizontal,
  BsiDistributeHorizontal_default as default
};
