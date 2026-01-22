<script>
export default {
  data() {
    return {
      initialPageTitle: "",
      initialAICall: "",
      initialHintText: "",
    };
  },
  created() {
    this.initialPageTitle = this.pageTitle;
    this.initialAICall = this.AICall;
    this.initialHintText = this.hintText;
  },
  beforeRouteLeave(to, from, next) {
    // 检查是否有未保存的内容
    const unsavedChanges = [];

    if (this.pageTitle !== this.initialPageTitle) {
      unsavedChanges.push("标签页标题");
    }
    if (this.AICall !== this.initialAICall) {
      unsavedChanges.push("智能助手名称");
    }
    if (this.hintText !== this.initialHintText) {
      unsavedChanges.push("提示信息内容");
    }

    if (unsavedChanges.length > 0) {
      const changeMessage = `您有未保存的更改：${unsavedChanges.join(
        ", "
      )}，是否确认离开?`;

      this.$confirm(changeMessage, "提示", {
        confirmButtonText: "离开",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 用户点击了离开，继续导航
          next();
        })
        .catch(() => {
          // 用户点击了取消，阻止导航
          next(false);
        });
    } else {
      // 没有未保存的内容，直接继续导航
      next();
    }
  },
};
</script>
