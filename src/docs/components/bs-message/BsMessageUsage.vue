<template>
<div class="component-usage">
  <ul>
    <li>
      <h3>显示效果</h3>
      <div>
        <BsMessage
          :duration="0"
          style="display: inline-block; position: static;transform: translateX(0);"
          type="info"
          message="普通消息！"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="success"
          message="成功的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="warning"
          message="警告的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="danger"
          message="危险的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :show-icon="false"
          type="info"
          message="不显示图标"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :show-close="false"
          type="info"
          message="不显示关闭按钮"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :grouping="true"
          :repeat-num="5"
          type="danger"
          message="合并相同内容的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
    </li>
    <li>
      <h3>操作按钮</h3>
      <div>
        <bs-button type="primary" @click="quickSuccess">快速创建success消息</bs-button>
      </div>
      <div style="margin-top: 20px;">
        <bs-button type="primary" @click="createNoClosed">快速创建一条不会关闭的消息</bs-button>
      </div>
      <div style="margin-top: 20px;">
        <bs-button type="primary" @click="createWarning">创建一条警告消息</bs-button>
      </div>
      <div style="margin-top: 20px;">
        <bs-button type="primary" @click="closeAll">关闭所有弹窗</bs-button>
      </div>
    </li>
  </ul>
  <div id="message_test"></div>
</div>
</template>

<script lang="ts">
import { defineComponent, createVNode, getCurrentInstance, ComponentInternalInstance } from 'vue';
import BsMessageCom from './BsMessage.vue';
import BsBadge from '@/components/bootstrap/bs-badge/BsBadge.vue';
import createMessage from './bs-message';

export default defineComponent({
  name: 'BsMessageUsage',
  components: {
    BsMessage: BsMessageCom
  },
  setup () {
    let { proxy } = getCurrentInstance() as ComponentInternalInstance;
    createMessage({
      type: 'success',
      message: '一条由js代码创建的消息',
      onClose (vm: any) {
        console.log('message关闭了', vm);
      }
    });
    setTimeout(function () {
      createMessage({
        type: 'warning',
        // appendTo: '#message_test',
        grouping: true,
        message: 'js代码创建的第二条消息'
      });
    }, 1000);

    setTimeout(function () {
      createMessage({
        type: 'warning',
        // appendTo: '#message_test',
        grouping: true,
        message: 'js代码创建的第二条消息'
      });
    }, 1500);

    setTimeout(function () {
      createMessage({
        type: 'danger',
        appendTo: '#message_test',
        message: '一条由添加进了id=message_test盒子的消息'
      });
    }, 1500);

    setTimeout(function () {
      createMessage({
        type: 'info',
        appendTo: '#message_test',
        message: '一条由添加进了id=message_test盒子的消息2'
      });
    }, 2000);

    setTimeout(function () {
      createMessage({
        type: 'info',
        duration: 0,
        // createVNode 第3个参数为默认插槽，它的值应该是一个函数，如果直接写vnode，则会报下面这种错误
        //  Non-function value encountered for default slot. Prefer function slots for better performance.
        message: createVNode('div', null, { default: () => [createVNode(BsBadge, null, { default: () => '徽章' }), '一条不会关闭，且message为vnode的消息！'] })
      });
    }, 2500);

    let quickSuccess = function () {
      // eslint-disable-next-line no-unused-expressions
      createMessage.success?.({
        message: '一条由BsMessage.success创建的消息！',
        grouping: true
      });
    };

    let createNoClosed = function () {
      // eslint-disable-next-line no-unused-expressions
      createMessage.danger?.({
        message: '一条由不会关闭的消息！',
        duration: 0
      });
    };

    let createWarning = function () {
      // eslint-disable-next-line no-unused-expressions
      (proxy as any)?.$message?.warning('通过vue实例创建的warning消息！');
    };

    let closeAll = function () {
      // eslint-disable-next-line no-unused-expressions
      createMessage.closeAllMessage?.();
    };
    return {
      quickSuccess,
      closeAll,
      createNoClosed,
      createWarning
    };
  }
});
</script>

<style lang="scss" scoped>
h3{
  margin: 20px 0 15px 0;
}
ul{
  display: flex;
  min-height: 100vh;
  li {
    &:nth-child(2){
      flex: 1;
      padding-left: 2rem;
    }
  }
}
</style>
