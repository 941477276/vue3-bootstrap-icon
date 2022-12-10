// src/icons/BsiCalendarMinusFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarMinusFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-minus-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiCalendarMinusFill.displayName = "BsiCalendarMinusFill";
var BsiCalendarMinusFill_default = BsiCalendarMinusFill;
export {
  BsiCalendarMinusFill,
  BsiCalendarMinusFill_default as default
};
