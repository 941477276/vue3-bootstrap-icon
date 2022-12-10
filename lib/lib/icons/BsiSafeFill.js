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

// src/icons/BsiSafeFill.ts
var BsiSafeFill_exports = {};
__export(BsiSafeFill_exports, {
  BsiSafeFill: () => BsiSafeFill,
  default: () => BsiSafeFill_default
});
module.exports = __toCommonJS(BsiSafeFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSafeFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "safe-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.778 9.414A2 2 0 1 1 6.95 6.586a2 2 0 0 1 2.828 2.828z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 0A1.5 1.5 0 0 0 1 1.5V3H.5a.5.5 0 0 0 0 1H1v3.5H.5a.5.5 0 0 0 0 1H1V12H.5a.5.5 0 0 0 0 1H1v1.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-12zm3.036 4.464 1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 1 1 .708-.708zM14 6.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0z" }, "children": [] }]
  });
};
BsiSafeFill.displayName = "BsiSafeFill";
var BsiSafeFill_default = BsiSafeFill;
