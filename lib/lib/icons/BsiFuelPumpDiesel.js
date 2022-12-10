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

// src/icons/BsiFuelPumpDiesel.ts
var BsiFuelPumpDiesel_exports = {};
__export(BsiFuelPumpDiesel_exports, {
  BsiFuelPumpDiesel: () => BsiFuelPumpDiesel,
  default: () => BsiFuelPumpDiesel_default
});
module.exports = __toCommonJS(BsiFuelPumpDiesel_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFuelPumpDiesel = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "fuel-pump-diesel",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5ZM4 14V9h1.796c.5 0 .913.098 1.237.293.325.195.567.479.725.85.161.371.242.82.242 1.344 0 .528-.08.98-.242 1.355a1.805 1.805 0 0 1-.732.861c-.324.198-.734.297-1.23.297H4Zm1.666-4.194h-.692v3.385h.692c.229 0 .427-.035.595-.103a.986.986 0 0 0 .412-.315c.108-.142.188-.318.241-.528.056-.21.083-.456.083-.74 0-.376-.048-.69-.144-.94a1.11 1.11 0 0 0-.436-.569c-.195-.127-.445-.19-.75-.19Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V8h.5a.5.5 0 0 0 .5-.5V4.324c0-.616 0-1.426-.294-2.081a1.969 1.969 0 0 0-.794-.907C14.534 1.111 14.064 1 13.5 1a.5.5 0 0 0 0 1c.436 0 .716.086.9.195a.97.97 0 0 1 .394.458c.147.328.19.746.201 1.222H13.5a.5.5 0 0 0-.5.5V7.5a.5.5 0 0 0 .5.5h.5v4.5a.5.5 0 0 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2H3Zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" }, "children": [] }]
  });
};
BsiFuelPumpDiesel.displayName = "BsiFuelPumpDiesel";
var BsiFuelPumpDiesel_default = BsiFuelPumpDiesel;
