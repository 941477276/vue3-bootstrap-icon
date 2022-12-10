// src/icons/BsiFilePerson.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePerson = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-person",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, "children": [] }]
  });
};
BsiFilePerson.displayName = "BsiFilePerson";
var BsiFilePerson_default = BsiFilePerson;
export {
  BsiFilePerson,
  BsiFilePerson_default as default
};
