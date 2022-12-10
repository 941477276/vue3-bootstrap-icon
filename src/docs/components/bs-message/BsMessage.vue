<template>
  <transition
    name="message_fade"
    @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      v-bind="$attrs"
      class="bs-message"
      :class="[
        `bs-message-${type}`,
        customClass,
        {
          'bs-message-dismissible': showClose,
          // 'bs-message-with-icon': showIcon
        }
      ]"
      :data-id="id"
      :style="customStyle"
      role="alert message"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <div class="bs-message-content">
        <slot>
          <div v-if="!dangerouslyUseHTMLString">{{ message }}</div>
          <div v-else v-html="message"></div>
        </slot>
      </div>
      <button
        type="button"
        class="close btn"
        data-dismiss="alert message"
        aria-label="Close"
        @click.stop="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed,
  onMounted,
  watch
} from 'vue';
import { messageProps } from './messageProps';
import { MessageType } from './token';
export default defineComponent({
  name: 'BsMessage',
  props: messageProps,
  emits: ['destroy'],
  setup (props: any, ctx) {
    let visible = ref(false);
    let timer: number;

    let customStyle = computed(function () {
      return {
        top: props.offsetTop + 'px',
        zIndex: props.zIndex
      };
    });

    let clearTimer = function () {
      clearTimeout(timer);
    };

    let startTimer = function () {
      clearTimer();
      if (props.duration > 0) {
        timer = setTimeout(close, props.duration);
      }
    };

    let close = function () {
      visible.value = false;
      clearTimer();
      if (typeof props.onClose === 'function') {
        props.onClose();
      }
    };

    // message 一显示出来则立即开启倒计时
    watch(visible, function (newVal: boolean) {
      if (newVal) {
        startTimer();
      }
    });
    watch(() => props.repeatNum, function () {
      startTimer();
    });

    onMounted(function () {
      visible.value = true;
    });
    return {
      visible,
      customStyle,

      close,
      clearTimer,
      startTimer
    };
  }
});
</script>

<style lang="scss">
@import "bs-message";
</style>
