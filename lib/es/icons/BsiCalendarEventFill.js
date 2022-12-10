// src/icons/BsiCalendarEventFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarEventFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-event-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiCalendarEventFill.displayName = "BsiCalendarEventFill";
var BsiCalendarEventFill_default = BsiCalendarEventFill;
export {
  BsiCalendarEventFill,
  BsiCalendarEventFill_default as default
};
