// src/icons/BsiBoxArrowDownLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBoxArrowDownLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "box-arrow-down-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M7.364 12.5a.5.5 0 0 0 .5.5H14.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 14.5 0h-10A1.5 1.5 0 0 0 3 1.5v6.636a.5.5 0 1 0 1 0V1.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7.864a.5.5 0 0 0-.5.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 15.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H1.707l8.147-8.146a.5.5 0 0 0-.708-.708L1 14.293V10.5a.5.5 0 0 0-1 0v5z" }, "children": [] }]
  });
};
BsiBoxArrowDownLeft.displayName = "BsiBoxArrowDownLeft";
var BsiBoxArrowDownLeft_default = BsiBoxArrowDownLeft;
export {
  BsiBoxArrowDownLeft,
  BsiBoxArrowDownLeft_default as default
};
