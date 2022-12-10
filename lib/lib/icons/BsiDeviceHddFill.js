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

// src/icons/BsiDeviceHddFill.ts
var BsiDeviceHddFill_exports = {};
__export(BsiDeviceHddFill_exports, {
  BsiDeviceHddFill: () => BsiDeviceHddFill,
  default: () => BsiDeviceHddFill_default
});
module.exports = __toCommonJS(BsiDeviceHddFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiDeviceHddFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "device-hdd-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.785 9.896A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96ZM9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-9.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677Z" }, "children": [] }]
  });
};
BsiDeviceHddFill.displayName = "BsiDeviceHddFill";
var BsiDeviceHddFill_default = BsiDeviceHddFill;
