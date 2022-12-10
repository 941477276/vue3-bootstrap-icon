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

// src/icons/BsiFileEarmarkSlidesFill.ts
var BsiFileEarmarkSlidesFill_exports = {};
__export(BsiFileEarmarkSlidesFill_exports, {
  BsiFileEarmarkSlidesFill: () => BsiFileEarmarkSlidesFill,
  default: () => BsiFileEarmarkSlidesFill_default
});
module.exports = __toCommonJS(BsiFileEarmarkSlidesFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileEarmarkSlidesFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-earmark-slides-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 9.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5 6h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 11h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V11h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 6z" }, "children": [] }]
  });
};
BsiFileEarmarkSlidesFill.displayName = "BsiFileEarmarkSlidesFill";
var BsiFileEarmarkSlidesFill_default = BsiFileEarmarkSlidesFill;
