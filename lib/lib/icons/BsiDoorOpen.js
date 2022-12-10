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

// src/icons/BsiDoorOpen.ts
var BsiDoorOpen_exports = {};
__export(BsiDoorOpen_exports, {
  BsiDoorOpen: () => BsiDoorOpen,
  default: () => BsiDoorOpen_default
});
module.exports = __toCommonJS(BsiDoorOpen_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiDoorOpen = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "door-open",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" }, "children": [] }]
  });
};
BsiDoorOpen.displayName = "BsiDoorOpen";
var BsiDoorOpen_default = BsiDoorOpen;
