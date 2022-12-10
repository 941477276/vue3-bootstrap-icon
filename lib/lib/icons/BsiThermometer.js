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

// src/icons/BsiThermometer.ts
var BsiThermometer_exports = {};
__export(BsiThermometer_exports, {
  BsiThermometer: () => BsiThermometer,
  default: () => BsiThermometer_default
});
module.exports = __toCommonJS(BsiThermometer_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiThermometer = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "thermometer",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z" }, "children": [] }]
  });
};
BsiThermometer.displayName = "BsiThermometer";
var BsiThermometer_default = BsiThermometer;
