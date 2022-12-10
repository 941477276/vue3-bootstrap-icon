// src/icons/BsiSignpostSplit.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSignpostSplit = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "signpost-split",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" }, "children": [] }]
  });
};
BsiSignpostSplit.displayName = "BsiSignpostSplit";
var BsiSignpostSplit_default = BsiSignpostSplit;
export {
  BsiSignpostSplit,
  BsiSignpostSplit_default as default
};
