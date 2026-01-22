<template>
  <div>
    <!-- 遮罩层（点击后触发提示） -->
    <div v-if="showMask" class="mask" @click="handleMaskClick"></div>

    <!-- 其他内容（比如 PDF 组件） -->
    <pdf :src="pdfUrl" />
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      showMask: true, // 控制遮罩层显示
      pdfUrl: "/path/to/your.pdf", // PDF 文件路径
    };
  },
  methods: {
    handleMaskClick() {
      Message({
        message: "你点击了遮罩层！",
        type: "info", // 可选：success/warning/error/info
        duration: 2000, // 2秒后自动关闭
      });
      console.log("Mask clicked!");
      this.showMask = false; // 可选：关闭遮罩层
    },
    // handleMaskClick() {
    //   // 点击遮罩层后的逻辑
    //   alert("请选择检索模式"); // 弹窗提示
    //   this.$message.warn("请选择检索模式");
    //   console.log("Mask clicked!"); // 控制台输出
    //   this.showMask = false; // 点击后关闭遮罩层（可选）
    // },
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色遮罩 */
  z-index: 9999; /* 确保遮罩层在最上层 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
}
</style>
