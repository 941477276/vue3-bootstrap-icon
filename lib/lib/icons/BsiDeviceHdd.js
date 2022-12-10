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

// src/icons/BsiDeviceHdd.ts
var BsiDeviceHdd_exports = {};
__export(BsiDeviceHdd_exports, {
  BsiDeviceHdd: () => BsiDeviceHdd,
  default: () => BsiDeviceHdd_default
});
module.exports = __toCommonJS(BsiDeviceHdd_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiDeviceHdd = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "device-hdd",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z" }, "children": [] }]
  });
};
BsiDeviceHdd.displayName = "BsiDeviceHdd";
var BsiDeviceHdd_default = BsiDeviceHdd;
