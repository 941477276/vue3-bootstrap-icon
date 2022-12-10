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

// src/icons/BsiCalendar3RangeFill.ts
var BsiCalendar3RangeFill_exports = {};
__export(BsiCalendar3RangeFill_exports, {
  BsiCalendar3RangeFill: () => BsiCalendar3RangeFill,
  default: () => BsiCalendar3RangeFill_default
});
module.exports = __toCommonJS(BsiCalendar3RangeFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCalendar3RangeFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "calendar3-range-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z" }, "children": [] }]
  });
};
BsiCalendar3RangeFill.displayName = "BsiCalendar3RangeFill";
var BsiCalendar3RangeFill_default = BsiCalendar3RangeFill;
