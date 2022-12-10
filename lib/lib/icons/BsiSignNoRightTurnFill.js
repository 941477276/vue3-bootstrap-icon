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

// src/icons/BsiSignNoRightTurnFill.ts
var BsiSignNoRightTurnFill_exports = {};
__export(BsiSignNoRightTurnFill_exports, {
  BsiSignNoRightTurnFill: () => BsiSignNoRightTurnFill,
  default: () => BsiSignNoRightTurnFill_default
});
module.exports = __toCommonJS(BsiSignNoRightTurnFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignNoRightTurnFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-no-right-turn-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098C7.025 6.034 7.259 6 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658a.265.265 0 0 1-.026.02L14 13.291Zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.495 2.495 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.707 7 9 8.293V7H7.707Z" }, "children": [] }]
  });
};
BsiSignNoRightTurnFill.displayName = "BsiSignNoRightTurnFill";
var BsiSignNoRightTurnFill_default = BsiSignNoRightTurnFill;
