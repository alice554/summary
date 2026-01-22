<template>
  <div>
    <el-button class="animate-gradient"></el-button>
  </div>
</template>

<style scoped>
@keyframes gradient-animation {
  0% {
    background-position: 100% 0; /* 起始位置：渐变在右侧（看不见） */
  }
  100% {
    background-position: -100% 0; /* 结束位置：渐变滑到左侧（完全离开） */
  }
}

.animate-gradient {
  background: linear-gradient(
    90deg,
    transparent 0%,
    /* 最左侧完全透明（晕染起点） */ #c5ecd820 5%,
    /* 轻微透出颜色（晕染过渡） */ #c5ecd860 15%,
    /* 半透明（继续过渡） */ #c5ecd8 25%,
    /* 完全实色（核心颜色区） */ transparent 40%
      /* 右侧快速过渡到透明（不影响其他区域） */
  );
  background-size: 200% 100%; /* 保持动画范围 */
  border-color: #80e1b1;
  color: #80e1b1;
  animation: gradient-animation 2s linear infinite;
  transition: background-position 0.3s ease-out;
}
</style>