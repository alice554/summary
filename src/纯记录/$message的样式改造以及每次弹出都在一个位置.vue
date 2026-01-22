<script>
this.$message({
  message: this.$createElement(
    "p",
    { class: "custom-message-content" },
    "请输入内容"
  ),
  customClass: "custom-message-box",
  showClose: false,
  duration: 3000,
  type: "", // 不使用内置的 error/success 类型，避免默认图标
  offset: 50,
});
</script>
<style>
/* 切记这里不加scoped */
.custom-message-box {
  background-color: #555555;
  color: #fff;
  display: flex;
  justify-content: center;
  min-width: unset !important;
  border-radius: 10px;
  position: fixed !important;
  top: 20px !important;
  left: 50% !important;
  /* 这个让样式变化时，有动画效果 */
  transition: all 0.3s !important;
  z-index: 3000 !important;
  padding: 0;
}
.custom-message-content {
  font-size: 16px;
  width: 200px;
  display: flex;
  justify-content: center;
  height: 40px;
  padding: 0;
  align-items: center;
}
</style>
<script>
// V2.0修改样式, 只是位置一直在一个地方提示, 后者覆盖前者的位置;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
this.$message({
  message: this.$createElement(
    "p",
    { class: "custom-message-content1" },
    "状态更新成功 !"
  ),
  customClass: "custom-message-box1",
  showClose: false,
  duration: 3000,
  type: "success",
  offset: 50,
});
//V2.0不修改样式, 只是位置一直在一个地方提示, 后者覆盖前者的位置;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
this.$message({
  message: this.$createElement(
    "p",
    { class: "custom-message-content1" },
    "当前正在上传中，切勿关闭界面 !"
  ),
  customClass: "custom-message-box1",
  showClose: false,
  duration: 3000,
  type: "warning",
  offset: 50,
});
</script>
<style >
/* V2.0修改样式, 只是位置一直在一个地方提示, 后者覆盖前者的位置;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
.custom-message-box1 {
  background-color: #f0f9eb;
  color: #67c23a;
  z-index: 3000 !important;
  min-width: unset !important;
  top: 20px !important;
  left: 50% !important;
}
.custom-message-content1 {
  background-color: #f0f9eb;
  width: 200px;
  padding: 0;
  align-items: center;
  color: #67c23a;
}
/* V2.0不不不不不修改样式, 只是位置一直在一个地方提示, 后者覆盖前者的位置; */
.custom-message-box1 {
  z-index: 3000 !important;
  min-width: unset !important;
  top: 20px !important;
  left: 50% !important;
}
.custom-message-content1 {
  font-size: 14px;
  width: 260px;
  padding: 0;
  align-items: center;
  color: #e6a23c;
}
</style>


