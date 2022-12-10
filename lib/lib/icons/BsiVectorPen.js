"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/BsiVectorPen.ts
var BsiVectorPen_exports = {};
__export(BsiVectorPen_exports, {
  BsiVectorPen: () => BsiVectorPen,
  default: () => BsiVectorPen_default
});
module.exports = __toCommonJS(BsiVectorPen_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiVectorPen = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "vector-pen",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" }, "children": [] }]
  });
};
BsiVectorPen.displayName = "BsiVectorPen";
var BsiVectorPen_default = BsiVectorPen;
