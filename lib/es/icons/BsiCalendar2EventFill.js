// src/icons/BsiCalendar2EventFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar2EventFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar2-event-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" }, "children": [] }]
  });
};
BsiCalendar2EventFill.displayName = "BsiCalendar2EventFill";
var BsiCalendar2EventFill_default = BsiCalendar2EventFill;
export {
  BsiCalendar2EventFill,
  BsiCalendar2EventFill_default as default
};
