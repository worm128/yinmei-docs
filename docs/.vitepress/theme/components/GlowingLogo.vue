<!-- components/GlowingLogo.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Logo',
  },
  // 发光动画时长（毫秒）
  duration: {
    type: Number,
    default: 1000,
  },
  // 每次检查间隔（毫秒）
  interval: {
    type: Number,
    default: 5000,
  },
  // 触发概率 0~1
  probability: {
    type: Number,
    default: 0.3,
  },
})

const glowing = ref(false)
let timer = null

function tryTrigger() {
  if (Math.random() < props.probability && !glowing.value) {
    glowing.value = true
    setTimeout(() => {
      glowing.value = false
    }, props.duration + 100) // 多留 100ms 余量
  }
  timer = setTimeout(tryTrigger, props.interval)
}

onMounted(() => {
  timer = setTimeout(tryTrigger, props.interval)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div :class="{ logo: glowing }">
    <img :src="src" :alt="alt" />
  </div>
</template>

<style scoped>
@keyframes glow {
  0% {
    filter: blur(5px) brightness(2);
    opacity: 1;
  }
  50% {
    filter: blur(0) brightness(1);
    opacity: 1;
  }
  85% {
    filter: blur(3px) brightness(1.5);
    opacity: 1;
  }
  100% {
    filter: blur(0) brightness(1);
    opacity: 1;
  }
}

.logo {
  animation: glow v-bind(duration + 'ms') ease-in-out;
}
</style>