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

// src/icons/BsiHdmiFill.ts
var BsiHdmiFill_exports = {};
__export(BsiHdmiFill_exports, {
  BsiHdmiFill: () => BsiHdmiFill,
  default: () => BsiHdmiFill_default
});
module.exports = __toCommonJS(BsiHdmiFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiHdmiFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "hdmi-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.707.707 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1H1Zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1Z" }, "children": [] }]
  });
};
BsiHdmiFill.displayName = "BsiHdmiFill";
var BsiHdmiFill_default = BsiHdmiFill;
