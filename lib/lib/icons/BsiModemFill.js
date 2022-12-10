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

// src/icons/BsiModemFill.ts
var BsiModemFill_exports = {};
__export(BsiModemFill_exports, {
  BsiModemFill: () => BsiModemFill,
  default: () => BsiModemFill_default
});
module.exports = __toCommonJS(BsiModemFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiModemFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "modem-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.404 1.497c-.35.305-.872.678-1.628 1.056A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .224-.947c-.756-.378-1.278-.75-1.628-1.056A1.5 1.5 0 0 0 10.5 12.5v-11A1.5 1.5 0 0 0 9 0H7Zm1 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" }, "children": [] }]
  });
};
BsiModemFill.displayName = "BsiModemFill";
var BsiModemFill_default = BsiModemFill;
