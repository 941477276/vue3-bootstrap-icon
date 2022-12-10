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

// src/icons/BsiBrightnessAltLowFill.ts
var BsiBrightnessAltLowFill_exports = {};
__export(BsiBrightnessAltLowFill_exports, {
  BsiBrightnessAltLowFill: () => BsiBrightnessAltLowFill,
  default: () => BsiBrightnessAltLowFill_default
});
module.exports = __toCommonJS(BsiBrightnessAltLowFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBrightnessAltLowFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "brightness-alt-low-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" }, "children": [] }]
  });
};
BsiBrightnessAltLowFill.displayName = "BsiBrightnessAltLowFill";
var BsiBrightnessAltLowFill_default = BsiBrightnessAltLowFill;
