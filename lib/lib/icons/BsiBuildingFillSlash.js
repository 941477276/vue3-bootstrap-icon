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

// src/icons/BsiBuildingFillSlash.ts
var BsiBuildingFillSlash_exports = {};
__export(BsiBuildingFillSlash_exports, {
  BsiBuildingFillSlash: () => BsiBuildingFillSlash,
  default: () => BsiBuildingFillSlash_default
});
module.exports = __toCommonJS(BsiBuildingFillSlash_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBuildingFillSlash = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "building-fill-slash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" }, "children": [] }]
  });
};
BsiBuildingFillSlash.displayName = "BsiBuildingFillSlash";
var BsiBuildingFillSlash_default = BsiBuildingFillSlash;
