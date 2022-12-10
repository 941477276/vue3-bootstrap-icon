// src/icons/BsiCalendar4Event.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar4Event = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar4-event",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" }, "children": [] }]
  });
};
BsiCalendar4Event.displayName = "BsiCalendar4Event";
var BsiCalendar4Event_default = BsiCalendar4Event;
export {
  BsiCalendar4Event,
  BsiCalendar4Event_default as default
};
