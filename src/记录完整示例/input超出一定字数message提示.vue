<template>
  <el-input
    v-model="question"
    placeholder="请输入问题"
    @keydown.native="handleKeydown"
    @compositionstart.native="handleCompositionStart"
    @compositionend.native="handleCompositionEnd"
  />
</template>

<script>
export default {
  data() {
    return {
      question: "",
      isSent: false,
      isComposing: false,
      knowledgeQuestionMaxLength: 10, // 你需要的最大长度
    };
  },
  methods: {
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd() {
      this.isComposing = false;
      // 中文输入确认后，检测是否超过长度
      if (this.question.length > this.knowledgeQuestionMaxLength) {
        this.showLengthMessage();
      }
    },
    handleKeydown(e) {
      if (this.isSent) {
        if (e.keyCode === 13) {
          e.preventDefault();
          this.$message.warning("模型正在回答，请稍后...");
        }
        return;
      }

      const key = e.key;
      const isInputChar =
        key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;

      // 不是组合输入状态时（英文输入等）
      if (
        !this.isComposing &&
        this.question.length >= this.knowledgeQuestionMaxLength &&
        isInputChar
      ) {
        this.showLengthMessage();
      }

      if (e.keyCode === 13) {
        if (e.shiftKey) {
          e.preventDefault();
          this.question += "\n";
        } else {
          if (this.isEmptyOrWhitespace(this.question)) {
            this.$message({
              message: this.$createElement(
                "p",
                { class: "custom-message-content" },
                "请输入内容"
              ),
              customClass: "custom-message-box",
              showClose: false,
              duration: 3000,
              type: "",
              offset: 50,
            });
          } else {
            this.submit();
          }
          e.preventDefault();
        }
      }
    },
    showLengthMessage() {
      this.$message({
        message: this.$createElement(
          "p",
          { class: "custom-message-content" },
          "最多可以输入 " + this.knowledgeQuestionMaxLength + " 字"
        ),
        customClass: "custom-message-box",
        showClose: false,
        duration: 1000,
        type: "",
        offset: 50,
      });
    },
    isEmptyOrWhitespace(str) {
      return !str || !str.trim();
    },
    submit() {
      // 你的提交逻辑
      console.log("submit:", this.question);
    },
  },
};
</script>
