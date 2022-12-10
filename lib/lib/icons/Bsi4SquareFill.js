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

// src/icons/Bsi4SquareFill.ts
var Bsi4SquareFill_exports = {};
__export(Bsi4SquareFill_exports, {
  Bsi4SquareFill: () => Bsi4SquareFill,
  default: () => Bsi4SquareFill_default
});
module.exports = __toCommonJS(Bsi4SquareFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var Bsi4SquareFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "4-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z" }, "children": [] }]
  });
};
Bsi4SquareFill.displayName = "Bsi4SquareFill";
var Bsi4SquareFill_default = Bsi4SquareFill;
