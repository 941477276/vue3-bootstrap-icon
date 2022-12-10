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

// src/icons/BsiLightbulbOffFill.ts
var BsiLightbulbOffFill_exports = {};
__export(BsiLightbulbOffFill_exports, {
  BsiLightbulbOffFill: () => BsiLightbulbOffFill,
  default: () => BsiLightbulbOffFill_default
});
module.exports = __toCommonJS(BsiLightbulbOffFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiLightbulbOffFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "lightbulb-off-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z" }, "children": [] }]
  });
};
BsiLightbulbOffFill.displayName = "BsiLightbulbOffFill";
var BsiLightbulbOffFill_default = BsiLightbulbOffFill;
