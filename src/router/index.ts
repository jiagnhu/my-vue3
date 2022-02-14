/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version:
 * @Author: 江湖
 * @Date: 2022-01-19 16:19:27
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 19:32:26
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useSettingsOutsideStore } from '../store/modules/settings'

const routesContext = import.meta.globEager('./modules/*.ts')
const routes: Array<RouteRecordRaw> = []
//自动挂载路由方式
Object.keys(routesContext).forEach((v) => {
  routes.push(...routesContext[v].default)
  // routesContext[v].default.map((item: any) => {
  //   console.log(item)
  //   routes.push(item)
  // })
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
