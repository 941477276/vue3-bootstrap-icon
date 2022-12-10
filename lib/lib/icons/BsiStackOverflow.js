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

// src/icons/BsiStackOverflow.ts
var BsiStackOverflow_exports = {};
__export(BsiStackOverflow_exports, {
  BsiStackOverflow: () => BsiStackOverflow,
  default: () => BsiStackOverflow_default
});
module.exports = __toCommonJS(BsiStackOverflow_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiStackOverflow = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "stack-overflow",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" }, "children": [] }]
  });
};
BsiStackOverflow.displayName = "BsiStackOverflow";
var BsiStackOverflow_default = BsiStackOverflow;
