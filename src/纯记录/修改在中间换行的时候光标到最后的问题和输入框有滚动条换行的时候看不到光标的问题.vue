 <script>
 methods:{
   Keydown(e) {
      if (
        !this.isChatFileUploaded &&
        this.uploadedSingleFile.length > 0 &&
        e.keyCode === 13 &&
        !e.shiftKey &&
        !e.ctrlKey
      ) {
        e.preventDefault();
        // this.$message.warning("正在上传文件，请稍后...");
        this.$message({
          message: this.$createElement(
            "p",
            { class: "custom-message-content" },
            "正在上传文件，请稍后..."
          ),
          customClass: "custom-message-box",
          showClose: false,
          duration: 3000,
          type: "", // 不使用内置的 error/success 类型，避免默认图标
          offset: 50,
        });
        return;
      }
      if (this.isSent) {
        if (e.keyCode === 13 && !e.ctrlKey) {
          e.preventDefault();
          // this.$message.warning("模型正在回答，请稍后...");
          this.$message({
            message: this.$createElement(
              "p",
              { class: "custom-message-content" },
              "模型正在回答，请稍后..."
            ),
            customClass: "custom-message-box",
            showClose: false,
            duration: 3000,
            type: "", // 不使用内置的 error/success 类型，避免默认图标
            offset: 50,
          });
        }
        return;
      }

      if (e.keyCode === 13) {
        if (e.shiftKey) {
          console.log("点击Shift键了");

          e.preventDefault();
          // this.question += "\n";
          const { selectionStart, selectionEnd } = e.target;
          // 在光标位置插入换行符
          this.question =
            this.question.substring(0, selectionStart) +
            "\n" +
            this.question.substring(selectionEnd);
          // 延迟设置光标位置（确保 DOM 更新）
          this.$nextTick(() => {
            e.target.selectionStart = e.target.selectionEnd =
              selectionStart + 1;
            this.scrollToCursor(e.target);
          });
        } else if (e.ctrlKey) {
          // Ctrl + Enter：换行（新增功能）
          e.preventDefault();
          // this.question += "\n";
          const { selectionStart, selectionEnd } = e.target;
          // 在光标位置插入换行符
          this.question =
            this.question.substring(0, selectionStart) +
            "\n" +
            this.question.substring(selectionEnd);
          // 延迟设置光标位置（确保 DOM 更新）
          this.$nextTick(() => {
            e.target.selectionStart = e.target.selectionEnd =
              selectionStart + 1;
            this.scrollToCursor(e.target);
          });
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
              type: "", // 不使用内置的 error/success 类型，避免默认图标
              offset: 50,
            });
          } else {
            this.submit();
          }
          e.preventDefault();
        }
      }
    },
    scrollToCursor(textarea) {
      const lineHeight = 20; // 每行高度，根据实际样式调整
      const cursorPosition = textarea.selectionStart;
      const lines = this.question
        .substring(0, cursorPosition)
        .split("\n").length;
      const scrollTop = (lines - 1) * lineHeight;

      // 设置滚动条位置
      textarea.scrollTop = scrollTop;
    },
 }
  

//修改在中间换行的时候光标到最后的问题
//   把this.question += "\n";换成下面的代码
      const { selectionStart, selectionEnd } = e.target;
          // 在光标位置插入换行符
          this.question =
            this.question.substring(0, selectionStart) +
            "\n" +
            this.question.substring(selectionEnd);
          // 延迟设置光标位置（确保 DOM 更新）
          this.$nextTick(() => {
            e.target.selectionStart = e.target.selectionEnd =
              selectionStart + 1;
          });

//输入框有滚动条换行的时候看不到光标的问题
 this.scrollToCursor(e.target);
  scrollToCursor(textarea) {
      const lineHeight = 20; // 每行高度，根据实际样式调整
      const cursorPosition = textarea.selectionStart;
      const lines = this.question
        .substring(0, cursorPosition)
        .split("\n").length;
      const scrollTop = (lines - 1) * lineHeight;
      // 设置滚动条位置
      textarea.scrollTop = scrollTop;
    },
 </script>
