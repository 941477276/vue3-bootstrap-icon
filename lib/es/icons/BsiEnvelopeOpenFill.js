// src/icons/BsiEnvelopeOpenFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEnvelopeOpenFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "envelope-open-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" }, "children": [] }]
  });
};
BsiEnvelopeOpenFill.displayName = "BsiEnvelopeOpenFill";
var BsiEnvelopeOpenFill_default = BsiEnvelopeOpenFill;
export {
  BsiEnvelopeOpenFill,
  BsiEnvelopeOpenFill_default as default
};
