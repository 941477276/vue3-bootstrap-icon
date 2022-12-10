<template>
<div class="home-page">
  <div class="container-xxl">
    <div class="introduce row flex-lg-row-reverse">
      <div class="col-lg-5"><img class="introduce-img" src="../../assets/icons-hero@2x.png" alt=""></div>
      <div class="col-lg-7 jumbotron introduce-jumbotron">
        <h1 class="display-4 jumbotron-title">
          <!--Bootstrap vue3 组件图标库!-->
          {{ $t('home.jumbotronTitle') }}
        </h1>
        <!--<p class="lead">
          基于<code>vue3</code>的Bootstrap图标的免费、开源的图标组件库，所有图标均来自<a
          href="https://github.com/twbs/icons">Bootstrap官方图标库</a>。</p>-->

        <i18n-t class="lead" keypath="home.lead" tag="p">
          <template #vue3><code>vue3</code></template>
          <template #twbsIcons>
            <a href="https://github.com/twbs/icons">
              <!--Bootstrap官方图标库-->
              {{ $t('home.bootstrapOfficialIcon') }}
            </a>
          </template>
        </i18n-t>

        <!--<p>使用图标组件，你需要安装 <code>vue3-bootstrap-icon</code> 图标组件包：</p>-->
        <i18n-t keypath="home.beforeUseTip" tag="p">
          <template #bsVueIcon><code>vue3-bootstrap-icon</code></template>
        </i18n-t>
        <div class="install-code">
          npm install vue3-bootstrap-icon -S
        </div>
        <hr>
        <div class="text-muted">
          <!--最新版本：-->
          {{ $t('home.lastestVersion') }}
          <a href="#" target="_blank">v{{ version }}</a>
          <span class="dot-splitor">•</span>
          <a href="#" target="_blank"><!--Github源码仓库-->{{ $t('home.githubStorage') }}</a>
          <span class="dot-splitor">•</span>
          <!--Bootstrap Icon 版本:-->
          Bootstrap Icon {{ $t('version') }}
          <a href="https://github.com/twbs/icons/releases" target="_blank">v{{ bootstrapIconVersion }}</a>
        </div>
      </div>
    </div>

    <!--usage guide start-->
    <div class="usage-guide">
      <h3><!--用法-->{{ $t('usage') }}</h3>
      <!--<p><code>vue3-bootstrap-icon</code>中的每一个图标都是一个组件，因此您需要从<code>vue3-bootstrap-icon</code>库中导出。</p>-->
      <i18n-t keypath="home.usageTip" tag="p">
        <template #bsVueIcon><code>vue3-bootstrap-icon</code></template>
      </i18n-t>
      <div class="code-and-example">
        <div class="example">
          <BsiBootstrap title="bootstrap" />
          <BsiGithub title="github" />
        </div>
        <pre ref="usageExampleRef" class="language-html">
  &lt;template&gt;
    &lt;BsiBootstrap /&gt;
    &lt;BsiGithub /&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
    /* // {{ $t('home.comment1') }}<!--不推荐使用这种方式导入，因为库中有上千个图标组件，即有上千模块，在开发的时候webpack会把这-->
    // {{ $t('home.comment2') }}<!--上千个模块都加载进去，这会导致webpack热更新速度变慢-->
    // import { BsiBootstrap } from 'vue3-bootstrap-icon'; */
    import { BsiBootstrap } from 'vue3-bootstrap-icon/icons/BsiBootstrap';
    // <!--图标组件名称也是组件文件名称-->{{$t('home.iconNameIsTheComponentName')}}
    import { BsiGithub } from 'vue3-bootstrap-icon/icons/BsiGithub';
  &lt;/script&gt;
</pre>
      </div>
    </div>
    <!--usage guide end-->

    <div class="icon-list-box">
      <h3><!--图标列表-->{{ $t('home.iconList') }}</h3>
      <div class="operate-area">
        <div class="btn-group toggle-icon-btn-group" role="group" aria-label="toggle icon">
          <button
            type="button"
            class="btn"
            :class="visibledIconType == 'outlined' ? 'btn-primary' : 'btn-outline-primary'"
            @click="visibledIconType = 'outlined'"><!--线框风格-->{{ $t('home.outlinedStyle') }}</button>
          <button
            type="button"
            class="btn"
            :class="visibledIconType == 'filled' ? 'btn-primary' : 'btn-outline-primary'"
            @click="visibledIconType = 'filled'"><!--填充风格-->{{$t('home.filledStyle')}}</button>
        </div>
        <input type="text" v-model="searchText" class="form-control search-icon-input" :placeholder="$t('home.searchIconInputPlaceholder')" />
      </div>

      <ul class="icon-list" @click="handleIconClick">
        <li
          v-for="item in visibledIconKeys"
          :key="item"
          :icon-name="item">
          <component :is="item"></component>
          <p class="icon-name">{{ item }}</p>
        </li>
      </ul>
    </div>

    <div class="component-api">
      <h3><!--组件props-->{{$t('home.componentApiHeader')}}</h3>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"><!--参数-->{{$t('home.colParam')}}</th>
            <th scope="col"><!--说明-->{{$t('home.colExplain')}}</th>
            <th scope="col"><!--类型-->{{$t('home.colValueType')}}</th>
            <th scope="col"><!--默认值-->{{$t('home.colDefault')}}</th>
            <th scope="col"><!--版本-->{{$t('version')}}</th>
          </tr>
          </thead>
          <tbody>

          <tr
            v-for="item in componentPropsExplains"
            :key="item.name">
            <th scope="row">{{ item.name }}</th>
            <td><div v-html="item.desc"></div></td>
            <td>
              <code v-if="!Array.isArray(item.type)">{{ item.type }}</code>
              <template v-else>
                <code v-for="typeName in item.type"
                      :key="typeName">{{ typeName }}</code>
              </template>
            </td>
            <td><code>{{ item.defaultValue }}</code></td>
            <td>--</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed,
  inject,
  onUnmounted
} from 'vue';
import prism from 'prismjs';
// import "prismjs/themes/prism-coy.css";
import 'prism-themes/themes/prism-atom-dark.css';
import * as bsiIcons from '@/icons';
import { BsMessage } from '@/docs/components/bs-message';
import { copyText } from '@/docs/docUtil';
import { useI18n } from 'vue-i18n';

const packageJson = require('../../../package.json');
const bootstrapIconVersionJson = require('../../../svg/bootstrap-icons-version.json');

export default defineComponent({
  name: 'Home',
  components: {
    ...bsiIcons
  },
  setup (props, ctx) {
    const { t: $t } = useI18n();
    let appInjection: any = inject('appInjection');
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
    let searchText = ref('');

    let visibledIconKeys = computed(function () {
      let iconKeys = visibledIconType.value == 'outlined' ? outlinedIconsKey : filledIconsKey;
      let searchTextRaw = searchText.value;
      if (searchTextRaw.length == 0) {
        return iconKeys;
      }
      searchTextRaw = searchTextRaw.toLowerCase();
      return iconKeys.filter(iconKey => {
        return iconKey.toLowerCase().includes(searchTextRaw);
      });
    });

    let usageExampleRef = ref();

    // 图标点击事件
    let handleIconClick = function (evt: MouseEvent) {
      let target = evt.target! as HTMLElement;
      let tagName = target.nodeName;
      if (tagName == 'UL') {
        return;
      }
      while (tagName != 'LI' && !target.classList.contains('icon-list')) {
        target = target.parentElement!;
        tagName = target.nodeName;
      }
      if (!target) {
        return;
      }
      let iconName = target.getAttribute('icon-name');
      console.log('icon-name', iconName);
      let copyStatus = copyText(iconName);
      if (copyStatus == 1) {
        BsMessage!.success!(`【${iconName}】${$t('home.iconCopySuccess')}`); // 图标名称已复制到剪切板！
      } else {
        BsMessage!.warning!($t('home.iconCopyFailed')); // 图标复制失败！
      }
    };

    // 组件props属性
    let componentPropsExplains = computed(function () {
      return [
        {
          name: 'width',
          type: ['string', 'number'],
          defaultValue: '1em',
          desc: $t('home.iconWidth') // 图标宽度
        },
        {
          name: 'height',
          type: ['string', 'number'],
          defaultValue: '1em',
          desc: $t('home.iconHeight') // '图标高度'
        },
        {
          name: 'fill',
          type: 'string',
          defaultValue: 'currentColor',
          desc: $t('home.iconFillColor') // '图标填充颜色'
        },
        {
          name: 'viewBox',
          type: 'string',
          defaultValue: '',
          desc: $t('home.iconViewBoxDesc') // 'svg的viewBox属性，默认从svg中读取，若读取不到则使用"<code>0 0 1024 1024</code>"'
        },
        {
          name: 'ariaHidden',
          type: 'boolean',
          defaultValue: 'true',
          desc: $t('home.iconAriaHidden') // 'ariaHidden属性值'
        },
        {
          name: 'focusable',
          type: 'boolean',
          defaultValue: 'false',
          desc: $t('home.iconFocusable') // 'focusable属性值'
        }
      ];
    });
    let onLangChange = function () {
      prism.highlightElement(usageExampleRef.value);
    };
    appInjection && appInjection.addLangChangeEvent(onLangChange);
    onMounted(function () {
      // prism.highlightElement(usageExampleRef.value);
      onLangChange();
    });
    onUnmounted(function () {
      appInjection && appInjection.removeLangChangeEvent(onLangChange);
    });
    return {
      filledIconsKey,
      outlinedIconsKey,
      visibledIconType,
      searchText,
      visibledIconKeys,
      usageExampleRef,
      componentPropsExplains,
      version: packageJson.version,
      bootstrapIconVersion: bootstrapIconVersionJson.version,

      handleIconClick
    };
  }
});
</script>

<style lang="scss" scoped>
@import "home";
</style>
