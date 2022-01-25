<!--
 * @@Author: 唐亿开
 * @Date: 2022-01-25 10:26:35
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 16:38:18
 * @FilePath: /my-vue3/src/views/home/index.vue
 * @kjj1: 图案快捷键：window：ctrl+alt+j, mac：ctrl+cmd+j
 * @kjj2: 首部注释快捷键：window：ctrl+alt+i, mac：ctrl+cmd+i
-->
<template>
  <div class="home">
    江湖联盟
    <!-- Your content -->
  </div>
</template>

<script setup name="HomeIndex">
// const { proxy } = getCurrentInstance()
// const router = useRouter()

import { useJianghuOutsideStore } from '../../store/modules/jianghu'
const jianghu = useJianghuOutsideStore()
// const route = useRoute()
onMounted(async () => {
  const getPageData = await jianghu.getData({ aa: '江湖' })
  console.log(getPageData)
})

// const jiagnhu = ref(0)
// console.log(jiagnhu.value)
</script>

<style lang="less" scoped>
.home {
  font-size: 50px;
}
</style>
