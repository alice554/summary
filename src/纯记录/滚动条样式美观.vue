
<style scoped>
/* 滚动内容容器 */
.scroll-wrapper {
  max-height: 200px;
  overflow-y: auto;
}

/* 滚动条整体部分 */
::-webkit-scrollbar {
  width: 6px; /* 竖向滚动条宽度 */
  height: 2px; /* 横向滚动条高度 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #c1c1c1; /* 滑块颜色 */
  border-radius: 4px;
  transition: background 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8; /* 鼠标悬停时滑块颜色 */
}
/* ----------   Tips:  ------------*/
/* 最好不要把classscroll-wrapper写在<el-  >标签上,方法是在外层包裹一个div并设置class为scroll-wrapper */
</style>
