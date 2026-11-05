<template>
  <!-- 不渲染任何可见内容 -->
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 避免重复注入
  if (document.getElementById('baidu-hm')) return
  const hm = document.createElement('script')
  hm.id = 'baidu-hm'
  hm.src = 'https://hm.baidu.com/hm.js?ea78086b4e805db206b39ad35e71eec9'
  document.body.appendChild(hm) // 追加到 body 末尾 = 页面底部
})
</script>