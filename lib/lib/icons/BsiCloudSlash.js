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

// src/icons/BsiCloudSlash.ts
var BsiCloudSlash_exports = {};
__export(BsiCloudSlash_exports, {
  BsiCloudSlash: () => BsiCloudSlash,
  default: () => BsiCloudSlash_default
});
module.exports = __toCommonJS(BsiCloudSlash_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCloudSlash = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "cloud-slash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45-.725-.725A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "m13.646 14.354-12-12 .708-.708 12 12-.707.707z" }, "children": [] }]
  });
};
BsiCloudSlash.displayName = "BsiCloudSlash";
var BsiCloudSlash_default = BsiCloudSlash;
