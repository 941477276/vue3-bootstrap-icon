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

// src/icons/BsiSignNoLeftTurn.ts
var BsiSignNoLeftTurn_exports = {};
__export(BsiSignNoLeftTurn_exports, {
  BsiSignNoLeftTurn: () => BsiSignNoLeftTurn,
  default: () => BsiSignNoLeftTurn_default
});
module.exports = __toCommonJS(BsiSignNoLeftTurn_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignNoLeftTurn = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-no-left-turn",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8Zm3.416 5.29 5.988-5.987c.362.274.596.708.596 1.197V11h1V8.5c0-.765-.344-1.45-.885-1.908l3.176-3.176a7 7 0 0 1-9.874 9.874Zm-.707-.706a7 7 0 0 1 9.874-9.874L9.196 6.097A2.501 2.501 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966a.265.265 0 0 0 .026.02l-3.907 3.906ZM8.293 7 7 8.293V7h1.293Z" }, "children": [] }]
  });
};
BsiSignNoLeftTurn.displayName = "BsiSignNoLeftTurn";
var BsiSignNoLeftTurn_default = BsiSignNoLeftTurn;
