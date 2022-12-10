// src/icons/BsiDeviceHddFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDeviceHddFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "device-hdd-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.785 9.896A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96ZM9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-9.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677Z" }, "children": [] }]
  });
};
BsiDeviceHddFill.displayName = "BsiDeviceHddFill";
var BsiDeviceHddFill_default = BsiDeviceHddFill;
export {
  BsiDeviceHddFill,
  BsiDeviceHddFill_default as default
};
