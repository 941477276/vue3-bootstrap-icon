// src/icons/BsiFileEarmarkPerson.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkPerson = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-person",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" }, "children": [] }]
  });
};
BsiFileEarmarkPerson.displayName = "BsiFileEarmarkPerson";
var BsiFileEarmarkPerson_default = BsiFileEarmarkPerson;
export {
  BsiFileEarmarkPerson,
  BsiFileEarmarkPerson_default as default
};
