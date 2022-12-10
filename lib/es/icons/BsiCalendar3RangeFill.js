// src/icons/BsiCalendar3RangeFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar3RangeFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar3-range-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z" }, "children": [] }]
  });
};
BsiCalendar3RangeFill.displayName = "BsiCalendar3RangeFill";
var BsiCalendar3RangeFill_default = BsiCalendar3RangeFill;
export {
  BsiCalendar3RangeFill,
  BsiCalendar3RangeFill_default as default
};
