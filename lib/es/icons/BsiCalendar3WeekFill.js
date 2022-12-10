// src/icons/BsiCalendar3WeekFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar3WeekFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar3-week-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM5 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM2 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" }, "children": [] }]
  });
};
BsiCalendar3WeekFill.displayName = "BsiCalendar3WeekFill";
var BsiCalendar3WeekFill_default = BsiCalendar3WeekFill;
export {
  BsiCalendar3WeekFill,
  BsiCalendar3WeekFill_default as default
};
