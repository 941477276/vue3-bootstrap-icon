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

// src/icons/BsiSim.ts
var BsiSim_exports = {};
__export(BsiSim_exports, {
  BsiSim: () => BsiSim,
  default: () => BsiSim_default
});
module.exports = __toCommonJS(BsiSim_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSim = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sim",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44l1.915 1.914A1.5 1.5 0 0 1 14 3.414V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13zM3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3.414a.5.5 0 0 0-.146-.353l-1.915-1.915A.5.5 0 0 0 10.586 1H3.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 4a.5.5 0 0 0-.5.5V6h2.5V4h-2zm3 0v2H11V4.5a.5.5 0 0 0-.5-.5h-2zM11 7H5v2h6V7zm0 3H8.5v2h2a.5.5 0 0 0 .5-.5V10zm-3.5 2v-2H5v1.5a.5.5 0 0 0 .5.5h2zM4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7z" }, "children": [] }]
  });
};
BsiSim.displayName = "BsiSim";
var BsiSim_default = BsiSim;
