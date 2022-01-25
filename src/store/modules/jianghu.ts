/*
 * @@Author: 唐亿开
 * @Date: 2022-01-25 15:14:11
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 16:33:23
 * @FilePath: /my-vue3/src/store/modules/jianghu.ts
 * @kjj1: 图案快捷键：window：ctrl+alt+j, mac：ctrl+cmd+j
 * @kjj2: 首部注释快捷键：window：ctrl+alt+i, mac：ctrl+cmd+i
 */
import { defineStore } from 'pinia'
import piniaStore from '@/store'
import axios from '../../utils/http/axios'

export const useJianghuStore = defineStore(
  // 唯一ID
  'jianghu',
  {
    state: () => ({
      mas: '你好',
    }),
    getters: {},
    actions: {
      async getData() {
        try {
          return await axios.get('admin/application/application_query').then((res) => res.data)
        } catch (error) {}
      },
    },
  }
)

export function useJianghuOutsideStore() {
  return useJianghuStore(piniaStore)
}
