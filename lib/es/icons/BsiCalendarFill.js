// src/icons/BsiCalendarFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiCalendarFill.displayName = "BsiCalendarFill";
var BsiCalendarFill_default = BsiCalendarFill;
export {
  BsiCalendarFill,
  BsiCalendarFill_default as default
};
