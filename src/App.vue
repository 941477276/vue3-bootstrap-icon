<template>
  <div class="app doc-app">
    <header class="doc-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <router-link class="navbar-brand" to="/home">
          <BsiBootstrap></BsiBootstrap>
          <BsiBootstrapFill></BsiBootstrapFill>
        </router-link>
        <!--<button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                aria-label="Toggle navigation">
          <BsiThreeDots></BsiThreeDots>
        </button>-->

        <div class="navbar-container" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{active: $route.path == '/' || $route.path == '/home' }">
              <router-link class="nav-link" to="/home"><!--首页-->{{$t('nav.home')}}</router-link>
            </li>
            <li class="nav-item" :class="{active: $route.path == '/customized' }">
              <router-link class="nav-link" to="/customized"><!--自定义图标-->{{$t('nav.customized')}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item lang-nav-item">
              <select
                v-model="currentLang"
                class="form-control form-control-sm">
                <option value="cn">简体中文</option>
                <option value="en">English</option>
              </select>
            </li>
            <li class="nav-item icon-nav-item">
              <a href="#" class="nav-link" target="_blank">
                <BsiGithub></BsiGithub>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {
  SetupContext,
  ref,
  defineComponent,
  onMounted,
  watch,
  provide,
  nextTick
} from 'vue';
// import BsiThreeDots from '@/icons/BsiThreeDots';
import { BsiGithub } from '@/icons/BsiGithub';
import { BsiBootstrap } from '@/icons/BsiBootstrap';
import BsiBootstrapFill from '@/icons/BsiBootstrapFill';
import { useI18n } from 'vue-i18n';
import { loadLocalMessages, setI18nLanguage } from '@/docs/lang';

export default defineComponent({
  name: 'App',
  components: {
    // BsiThreeDots,
    BsiGithub,
    BsiBootstrap,
    BsiBootstrapFill
  },
  setup () {
    let i18n = useI18n();
    console.log('i18n2', i18n);

    let langChangeEvents: any[] = [];
    let currentLang = ref(i18n.locale.value);
    watch(currentLang, function (newLang) {
      let doLangChangeEvents = function () {
        nextTick(function () {
          langChangeEvents.forEach(handler => {
            try {
              handler();
            } catch (e) {
              console.error(e);
            }
          });
        });
      };
      if (i18n.availableLocales.includes(newLang)) {
        setI18nLanguage(newLang);
        doLangChangeEvents();
      } else {
        loadLocalMessages(newLang).then(() => {
          setI18nLanguage(newLang);
          doLangChangeEvents();
        });
      }
    });

    provide('appInjection', {
      addLangChangeEvent (handler: () => void) {
        langChangeEvents.push(handler);
      },
      removeLangChangeEvent (handler: () => void) {
        // langChangeEvents.push(handler());
        let index = langChangeEvents.findIndex(item => item === handler);
        if (index > -1) {
          langChangeEvents.splice(index, 1);
        }
      }
    });

    return {
      currentLang
    };
  }
});
</script>

<style lang="scss">
@import "app";
</style>
