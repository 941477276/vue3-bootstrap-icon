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

// src/icons/Bsi5CircleFill.ts
var Bsi5CircleFill_exports = {};
__export(Bsi5CircleFill_exports, {
  Bsi5CircleFill: () => Bsi5CircleFill,
  default: () => Bsi5CircleFill_default
});
module.exports = __toCommonJS(Bsi5CircleFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var Bsi5CircleFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "5-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z" }, "children": [] }]
  });
};
Bsi5CircleFill.displayName = "Bsi5CircleFill";
var Bsi5CircleFill_default = Bsi5CircleFill;
