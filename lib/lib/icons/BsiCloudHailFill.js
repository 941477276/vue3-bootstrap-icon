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

// src/icons/BsiCloudHailFill.ts
var BsiCloudHailFill_exports = {};
__export(BsiCloudHailFill_exports, {
  BsiCloudHailFill: () => BsiCloudHailFill,
  default: () => BsiCloudHailFill_default
});
module.exports = __toCommonJS(BsiCloudHailFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCloudHailFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "cloud-hail-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zM7.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm3.592 3.724a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm1.247-6.999a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.5H13a3 3 0 0 0 .405-5.973z" }, "children": [] }]
  });
};
BsiCloudHailFill.displayName = "BsiCloudHailFill";
var BsiCloudHailFill_default = BsiCloudHailFill;
