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

// src/icons/BsiSignDeadEndFill.ts
var BsiSignDeadEndFill_exports = {};
__export(BsiSignDeadEndFill_exports, {
  BsiSignDeadEndFill: () => BsiSignDeadEndFill,
  default: () => BsiSignDeadEndFill_default
});
module.exports = __toCommonJS(BsiSignDeadEndFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignDeadEndFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-dead-end-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.116 6.28h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.321V6.28Zm3.636.066.268.845h-.552l.27-.845h.014Zm1.327-.066h.32c.394 0 .582.24.582.722 0 .48-.186.718-.582.718h-.32V6.28Zm-.792 3h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.32V9.28Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM4.782 6h.69c.596 0 .886.355.886.998S6.066 8 5.473 8h-.69V6ZM7.82 7.72V8H6.571V6H7.82v.28h-.917v.57h.863v.268h-.863v.602h.917Zm.397.28h-.34l.688-2h.371l.689 2h-.352l-.177-.554h-.702L8.216 8Zm1.53-2h.69c.596 0 .886.355.886.998S11.03 8 10.436 8h-.69V6Zm-2.923 4.72V11H5.575V9h1.248v.28h-.917v.57h.863v.268h-.863v.602h.917Zm.572.28h-.32V9h.294l.933 1.436h.014V9h.32v2h-.292l-.936-1.44h-.013V11Zm1.56-2h.69c.596 0 .886.355.886.998S10.238 11 9.645 11h-.69V9Z" }, "children": [] }]
  });
};
BsiSignDeadEndFill.displayName = "BsiSignDeadEndFill";
var BsiSignDeadEndFill_default = BsiSignDeadEndFill;
