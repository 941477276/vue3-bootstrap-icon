
import {
  defineComponent,
  h,
  render,
  createVNode,
  SetupContext
} from 'vue';
import IconBase from './IconBase';
import './bs-icon.css';

export default defineComponent({
  name: 'BsIcon',
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
      default: ''
    },
    isFilled: {
      type: Boolean,
      default: false
    },
    svgChildrenVDom: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  emits: ['click', 'dblclick'],
  setup (props: any, ctx: SetupContext) {
    console.log('组件名称：', props.iconName);
    return () => {
      let iconName = props.iconName;
      return h('span', {
        role: 'img',
        'class': [
          'bs-icon',
          `bs-icon-${iconName}`,
          {
            'bs-icon-filled': props.isFilled
          }
        ],
        'area-label': iconName,
        onClick (evt: MouseEvent) {
          ctx.emit('click', evt);
        },
        onDblclick (evt: MouseEvent) {
          ctx.emit('dblclick', evt);
        }
      }, createVNode(IconBase, {
        ...props
      }));
    };
  }
});

export interface BsIconProps {
  width: string;
  height: string;
  fill: string;
  viewBox: string;
  ariaHidden: boolean;
  focusable: boolean;
}
