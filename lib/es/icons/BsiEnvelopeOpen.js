// src/icons/BsiEnvelopeOpen.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEnvelopeOpen = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "envelope-open",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" }, "children": [] }]
  });
};
BsiEnvelopeOpen.displayName = "BsiEnvelopeOpen";
var BsiEnvelopeOpen_default = BsiEnvelopeOpen;
export {
  BsiEnvelopeOpen,
  BsiEnvelopeOpen_default as default
};