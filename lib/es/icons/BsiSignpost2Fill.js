// src/icons/BsiSignpost2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSignpost2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "signpost-2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" }, "children": [] }]
  });
};
BsiSignpost2Fill.displayName = "BsiSignpost2Fill";
var BsiSignpost2Fill_default = BsiSignpost2Fill;
export {
  BsiSignpost2Fill,
  BsiSignpost2Fill_default as default
};
