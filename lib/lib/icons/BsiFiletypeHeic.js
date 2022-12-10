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

// src/icons/BsiFiletypeHeic.ts
var BsiFiletypeHeic_exports = {};
__export(BsiFiletypeHeic_exports, {
  BsiFiletypeHeic: () => BsiFiletypeHeic,
  default: () => BsiFiletypeHeic_default
});
module.exports = __toCommonJS(BsiFiletypeHeic_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFiletypeHeic = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "filetype-heic",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-4.637 8.554a1.732 1.732 0 0 0-.103.633v.495c0 .246.034.455.103.627a.834.834 0 0 0 .299.393.846.846 0 0 0 .477.131.868.868 0 0 0 .401-.088.698.698 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.268 1.268 0 0 1-.226.674c-.137.194-.32.345-.55.454a1.81 1.81 0 0 1-.786.164c-.36 0-.664-.072-.914-.216a1.424 1.424 0 0 1-.571-.627c-.129-.272-.194-.597-.194-.976v-.498c0-.379.066-.705.197-.978.13-.274.321-.485.571-.633.252-.149.556-.223.911-.223.219 0 .421.032.607.097.187.062.35.153.489.272a1.324 1.324 0 0 1 .466.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.802.802 0 0 0-.398-.097.814.814 0 0 0-.475.138.868.868 0 0 0-.301.398Zm-6.1-1.128v4h-.79V14.21H.79v1.714H0v-3.999h.791v1.626h1.682v-1.626h.79Zm1.488 3.352h1.79v.647H3.966v-3.999H6.54v.648H4.75v1.025h1.684v.607H4.751v1.072Zm3.163.647v-3.999h-.791v4h.79Z" }, "children": [] }]
  });
};
BsiFiletypeHeic.displayName = "BsiFiletypeHeic";
var BsiFiletypeHeic_default = BsiFiletypeHeic;
