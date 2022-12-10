// src/components/BsIcon.ts
import {
  defineComponent,
  h,
  createVNode
} from "vue";
import IconBase from "./IconBase";
import "./bs-icon-TMPSQPDN.css";
var BsIcon_default = defineComponent({
  name: "BsIcon",
  components: {
    IconBase
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
      return h("span", {
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
      }, createVNode(IconBase, {
        ...props
      }));
    };
  }
});
export {
  BsIcon_default as default
};
