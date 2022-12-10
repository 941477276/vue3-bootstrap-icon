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

// src/icons/BsiTropicalStorm.ts
var BsiTropicalStorm_exports = {};
__export(BsiTropicalStorm_exports, {
  BsiTropicalStorm: () => BsiTropicalStorm,
  default: () => BsiTropicalStorm_default
});
module.exports = __toCommonJS(BsiTropicalStorm_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiTropicalStorm = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "tropical-storm",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" }, "children": [] }]
  });
};
BsiTropicalStorm.displayName = "BsiTropicalStorm";
var BsiTropicalStorm_default = BsiTropicalStorm;
