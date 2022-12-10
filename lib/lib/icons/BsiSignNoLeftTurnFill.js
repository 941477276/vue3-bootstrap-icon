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

// src/icons/BsiSignNoLeftTurnFill.ts
var BsiSignNoLeftTurnFill_exports = {};
__export(BsiSignNoLeftTurnFill_exports, {
  BsiSignNoLeftTurnFill: () => BsiSignNoLeftTurnFill,
  default: () => BsiSignNoLeftTurnFill_default
});
module.exports = __toCommonJS(BsiSignNoLeftTurnFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignNoLeftTurnFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-no-left-turn-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 13.292A8 8 0 0 1 13.293 2L9.195 6.099A2.501 2.501 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966a.265.265 0 0 0 .026.02L2 13.291Zm.708.708A8 8 0 0 0 14 2.707l-3.885 3.884C10.656 7.05 11 7.735 11 8.5V11h-1V8.5c0-.489-.234-.923-.596-1.197l-6.696 6.696Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.293 7 7 8.293V7h1.293Z" }, "children": [] }]
  });
};
BsiSignNoLeftTurnFill.displayName = "BsiSignNoLeftTurnFill";
var BsiSignNoLeftTurnFill_default = BsiSignNoLeftTurnFill;
