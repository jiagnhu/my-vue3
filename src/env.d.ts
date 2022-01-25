/*
 * @@Author: 唐亿开
 * @Date: 2022-01-24 19:30:43
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 15:15:05
 * @FilePath: /my-vue3/src/env.d.ts
 * @kjj1: 图案快捷键：window：ctrl+alt+j, mac：ctrl+cmd+j
 * @kjj2: 首部注释快捷键：window：ctrl+alt+i, mac：ctrl+cmd+i
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-wechat-title'
declare module 'lodash'
declare module '@/store'
