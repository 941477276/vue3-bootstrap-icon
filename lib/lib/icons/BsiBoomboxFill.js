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

// src/icons/BsiBoomboxFill.ts
var BsiBoomboxFill_exports = {};
__export(BsiBoomboxFill_exports, {
  BsiBoomboxFill: () => BsiBoomboxFill,
  default: () => BsiBoomboxFill_default
});
module.exports = __toCommonJS(BsiBoomboxFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBoomboxFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "boombox-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1ZM6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6Zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" }, "children": [] }]
  });
};
BsiBoomboxFill.displayName = "BsiBoomboxFill";
var BsiBoomboxFill_default = BsiBoomboxFill;
