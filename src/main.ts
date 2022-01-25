/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version:
 * @Author: 扫地盲僧
 * @Date: 2022-01-19 16:19:27
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 19:31:49
 */
export {}
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import './index.css'
import ArcoVue from '@arco-design/web-vue'
import VueWechatTitle from 'vue-wechat-title' // 修改网页标题

// 支持SVG
import 'virtual:svg-icons-register'

// 动态修改网页标题
createApp(App).use(router).use(ArcoVue).use(piniaStore).use(VueWechatTitle).mount('#app')
