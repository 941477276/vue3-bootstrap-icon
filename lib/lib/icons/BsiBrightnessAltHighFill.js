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

// src/icons/BsiBrightnessAltHighFill.ts
var BsiBrightnessAltHighFill_exports = {};
__export(BsiBrightnessAltHighFill_exports, {
  BsiBrightnessAltHighFill: () => BsiBrightnessAltHighFill,
  default: () => BsiBrightnessAltHighFill_default
});
module.exports = __toCommonJS(BsiBrightnessAltHighFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBrightnessAltHighFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "brightness-alt-high-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" }, "children": [] }]
  });
};
BsiBrightnessAltHighFill.displayName = "BsiBrightnessAltHighFill";
var BsiBrightnessAltHighFill_default = BsiBrightnessAltHighFill;
