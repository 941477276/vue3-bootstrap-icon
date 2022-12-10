// src/icons/BsiArrowsAngleExpand.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowsAngleExpand = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrows-angle-expand",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" }, "children": [] }]
  });
};
BsiArrowsAngleExpand.displayName = "BsiArrowsAngleExpand";
var BsiArrowsAngleExpand_default = BsiArrowsAngleExpand;
export {
  BsiArrowsAngleExpand,
  BsiArrowsAngleExpand_default as default
};
