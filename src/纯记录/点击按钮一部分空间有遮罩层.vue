<template>
  <div>
    <el-button @click="showOverlay">显示遮罩</el-button>

    <!-- 需要遮罩的区域 -->
    <div ref="contentArea" class="content-area">
      <!-- 这里是你需要遮罩的内容 -->
      <p>这是需要被遮罩的内容区域</p>
      <el-button>测试按钮(应该被禁用)</el-button>
    </div>
    <div style="height: 500px; background-color: #f3bfc0">12415435</div>
  </div>
</template>

<script>
export default {
  methods: {
    showOverlay() {
      // 显示遮罩
      const loadingInstance = this.$loading({
        target: this.$refs.contentArea,
        lock: true,
        text: "加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });

      // 3秒后自动关闭(实际使用时根据业务需求调整)
      setTimeout(() => {
        loadingInstance.close();
      }, 3000);
    },
  },
};
</script>

<style>
.content-area {
  position: relative;
  height: 300px;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #eee;
}
</style>