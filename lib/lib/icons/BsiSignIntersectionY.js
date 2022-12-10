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

// src/icons/BsiSignIntersectionY.ts
var BsiSignIntersectionY_exports = {};
__export(BsiSignIntersectionY_exports, {
  BsiSignIntersectionY: () => BsiSignIntersectionY,
  default: () => BsiSignIntersectionY_default
});
module.exports = __toCommonJS(BsiSignIntersectionY_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignIntersectionY = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-intersection-y",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.493 5.197 8 7.483 5.507 5.197 4.493 6.303 7.25 8.83V12h1.5V8.83l2.757-2.527-1.014-1.106Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z" }, "children": [] }]
  });
};
BsiSignIntersectionY.displayName = "BsiSignIntersectionY";
var BsiSignIntersectionY_default = BsiSignIntersectionY;
