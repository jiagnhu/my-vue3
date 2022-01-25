<!--
 * @@Author: 唐亿开
 * @Date: 2022-01-24 19:30:42
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 14:59:58
 * @FilePath: /my-vue3/src/App.vue
 * @kjj1: 图案快捷键：window：ctrl+alt+j, mac：ctrl+cmd+j
 * @kjj2: 首部注释快捷键：window：ctrl+alt+i, mac：ctrl+cmd+i
-->
<template>
  <h1 class="text-9xl text-center mt-20">Hello FastVue3</h1>
  <p class="text-base font-Blimone text-center mt-5">
    <a href="https://github.com/MaleWeb/vvtp" target="__bank">@jiagnhu</a>
  </p>
  <router-view v-wechat-title="$route.meta.title" />
</template>

<script setup lang="ts">
import { useSettingsOutsideStore } from './store/modules/settings'
console.log(useSettingsOutsideStore().title, '测试全局store')
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f0f0f0;
}
</style>
