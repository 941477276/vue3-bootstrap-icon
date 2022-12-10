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

// src/icons/Bsi9SquareFill.ts
var Bsi9SquareFill_exports = {};
__export(Bsi9SquareFill_exports, {
  Bsi9SquareFill: () => Bsi9SquareFill,
  default: () => Bsi9SquareFill_default
});
module.exports = __toCommonJS(Bsi9SquareFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var Bsi9SquareFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "9-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.895 8.174c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.777 12.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3Z" }, "children": [] }]
  });
};
Bsi9SquareFill.displayName = "Bsi9SquareFill";
var Bsi9SquareFill_default = Bsi9SquareFill;
