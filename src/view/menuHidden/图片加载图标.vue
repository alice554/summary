<template>
  <div class="loading-rotate">
    <img
      src="@/assets/images/circle.png"
      class="rotate-img"
      style="width: 100px; height: 100px"
    />
  </div>
</template>

<style scoped>


.loading-rotate {
  display: inline-block;
}

.rotate-img {
  width: 25px;
  height: 25px;
  animation: rotate 3s linear infinite;
  transform-origin: center center;
  /* display: block; */
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>