/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version:
 * @Author: 江湖
 * @Date: 2022-01-21 18:11:32
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 18:11:32
 */
export default [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]
