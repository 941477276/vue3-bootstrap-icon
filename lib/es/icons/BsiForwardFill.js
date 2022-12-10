// src/icons/BsiForwardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiForwardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "forward-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" }, "children": [] }]
  });
};
BsiForwardFill.displayName = "BsiForwardFill";
var BsiForwardFill_default = BsiForwardFill;
export {
  BsiForwardFill,
  BsiForwardFill_default as default
};
