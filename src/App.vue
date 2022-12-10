<template>
  <div class="app">
    <div class="container">
      <button type="button" @click="visibledIconType = 'outlined'">线框图标</button>
      <button type="button" @click="visibledIconType = 'filled'">填充图标</button>
      <ul class="icon-list">
        <!--<li
          class="icon-item"
          v-for="iconInfo in (visibledIconType === 'outlined' ? outlinedIcons : filledIcons)"
          :key="iconInfo.name">
          <bs-icon
            :icon-name="iconInfo.name"
            :is-filled="iconInfo.isFilled"
            :svg-v-dom="iconInfo.svgVDom[0]"></bs-icon>
          <p class="icon-name">{{ iconInfo.name }}</p>
        </li>-->
        <li
          class="icon-item"
          v-for="iconName in (visibledIconType === 'outlined' ? outlinedIconsKey : filledIconsKey)"
          :key="iconName">
          <component :is="iconName" @click="onIconClick"></component>
          <p class="icon-name">{{ iconName }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  SetupContext,
  ref,
  defineComponent
} from 'vue';
// import BsIcon from '@/components/BsIcon';
// import BsiActivity from '@/icons/BsiActivity';
// import * as bsiIcons from '@/icons';
import * as bsiIcons from '../lib/es';
// import { BsIcon } from '../lib/es/index';
// import html2vDom from '../lib/es/html2vDom.js';
// const html2vDom2 = require('../lib/lib/html2vDom.js');

console.log(bsiIcons);
// console.log('html2vDom', html2vDom, html2vDom2);
// console.log(html2vDom('<div id="aa">一个地v</div>'));
// console.log(html2vDom2('<div id="aa">一个地v</div>'));

export default defineComponent({
  name: 'App',
  /* eslint-disable */
  components: {
    // BsIcon,
    ...bsiIcons
  },
  setup () {
    /* const filledIconContext = require.context('../svg/filled', true, /\.js$/);
    let filledIconInfos = filledIconContext.keys().reduce((result, path: string) => {
      // console.log(filledIconContext(path));
      result.push(filledIconContext(path));
      return result;
    }, [] as any[]);

    const outlinedIconContext = require.context('../svg/outlined', true, /\.js$/);
    let outlinedIconInfos = outlinedIconContext.keys().reduce((result, path: string) => {
      // console.log(outlinedIconContext(path));
      result.push(outlinedIconContext(path));
      return result;
    }, [] as any[]);

    // console.log('filledIconInfos', filledIconInfos);
    // console.log('outlinedIconInfos', outlinedIconInfos);
    let filledIcons = ref([...filledIconInfos]);
    let outlinedIcons = ref([...outlinedIconInfos]); */
    let filledIconsKey: string[] = [];
    let outlinedIconsKey: string[] = [];
    Object.keys(bsiIcons).forEach(key => {
      if (key === 'BsIcon') {
        return;
      }
      if (key.endsWith('Fill')) {
        filledIconsKey.push(key);
      } else {
        outlinedIconsKey.push(key);
      }
    });
    let visibledIconType = ref('outlined');
    return {
      // filledIcons,
      // outlinedIcons,
      filledIconsKey,
      outlinedIconsKey,
      visibledIconType,

      onIconClick (evt: MouseEvent) {
        console.log('组件点击了', evt);
      }
    };
  }
});
</script>

<style lang="scss">
.box{
  padding: 20px;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
}
.icon-list{
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  font-size: 2em;
  li{
    width: 16.6%;
    flex: 0 0 16.6%;
    padding: 15px 8px;
    margin: 0;
    list-style: none;
    text-align: center;
    transition: all .3s;
    box-sizing: border-box;
    /* 让渲染性能提高的一个css属性，设置该属性后元素的子元素在未出现在视口的情况下不会渲染 */
    content-visibility: auto;
    /* 给未渲染子元素的元素设置一个高度，否则会造成浏览器滚动条抖动 */
    contain-intrinsic-size: 108px;
    &:hover{
      color: #fff;
      background-color: #007bff;
    }
    svg{
      transition: color .1s;
    }
  }
  .icon-name{
    margin: 10px 0 0 0;
    font-size: 1rem;
  }
}
@media (max-width: 980px) {
  .icon-list{
    li {
      width: 20%;
      flex: 0 0 20%;
    }
  }
}
@media (max-width: 768px) {
  .icon-list{
    li {
      width: 33%;
      flex: 0 0 33%;
    }
  }
}
@media (max-width: 500px) {
  .icon-list{
    li {
      width: 50%;
      flex: 0 0 50%;
    }
  }
}
</style>
