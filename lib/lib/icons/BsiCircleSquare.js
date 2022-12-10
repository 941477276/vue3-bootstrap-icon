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

// src/icons/BsiCircleSquare.ts
var BsiCircleSquare_exports = {};
__export(BsiCircleSquare_exports, {
  BsiCircleSquare: () => BsiCircleSquare,
  default: () => BsiCircleSquare_default
});
module.exports = __toCommonJS(BsiCircleSquare_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCircleSquare = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "circle-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" }, "children": [] }]
  });
};
BsiCircleSquare.displayName = "BsiCircleSquare";
var BsiCircleSquare_default = BsiCircleSquare;
