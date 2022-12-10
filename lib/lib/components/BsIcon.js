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

// src/components/BsIcon.ts
var BsIcon_exports = {};
__export(BsIcon_exports, {
  default: () => BsIcon_default
});
module.exports = __toCommonJS(BsIcon_exports);
var import_vue = require("vue");
var import_IconBase = __toESM(require("./IconBase"));
var import_bs_icon = require("./bs-icon-TMPSQPDN.css");
var BsIcon_default = (0, import_vue.defineComponent)({
  name: "BsIcon",
  components: {
    IconBase: import_IconBase.default
  },
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    fill: {
      type: String
    },
    viewBox: {
      type: String
    },
    ariaHidden: {
      type: Boolean,
      default: true
    },
    focusable: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ""
    },
    isFilled: {
      type: Boolean,
      default: false
    },
    svgChildrenVDom: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["click", "dblclick"],
  setup(props, ctx) {
    return () => {
      let iconName = props.iconName;
      return (0, import_vue.h)("span", {
        role: "img",
        "class": [
          "bs-icon",
          `bs-icon-${iconName}`,
          {
            "bs-icon-filled": props.isFilled
          }
        ],
        "area-label": iconName,
        onClick(evt) {
          ctx.emit("click", evt);
        },
        onDblclick(evt) {
          ctx.emit("dblclick", evt);
        }
      }, (0, import_vue.createVNode)(import_IconBase.default, {
        ...props
      }));
    };
  }
});
