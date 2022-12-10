// src/icons/BsiCalendarRangeFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarRangeFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-range-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" }, "children": [] }]
  });
};
BsiCalendarRangeFill.displayName = "BsiCalendarRangeFill";
var BsiCalendarRangeFill_default = BsiCalendarRangeFill;
export {
  BsiCalendarRangeFill,
  BsiCalendarRangeFill_default as default
};
