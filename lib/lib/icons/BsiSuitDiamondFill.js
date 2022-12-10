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

// src/icons/BsiSuitDiamondFill.ts
var BsiSuitDiamondFill_exports = {};
__export(BsiSuitDiamondFill_exports, {
  BsiSuitDiamondFill: () => BsiSuitDiamondFill,
  default: () => BsiSuitDiamondFill_default
});
module.exports = __toCommonJS(BsiSuitDiamondFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSuitDiamondFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "suit-diamond-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" }, "children": [] }]
  });
};
BsiSuitDiamondFill.displayName = "BsiSuitDiamondFill";
var BsiSuitDiamondFill_default = BsiSuitDiamondFill;
