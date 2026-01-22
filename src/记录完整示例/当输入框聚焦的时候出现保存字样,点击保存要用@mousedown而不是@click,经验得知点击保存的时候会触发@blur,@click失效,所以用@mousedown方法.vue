<template>
  <!-- 当输入框聚焦的时候出现保存字样,点击保存要用@mousedown而不是@click,经验得知点击保存的时候会触发@blur,@click失效,所以用@mousedown方法 -->
  <div>
    <el-input
      v-model="inputValue"
      placeholder="请输入"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleSubmit"
      style="width: 100%"
    ></el-input>

    <!-- 使用 mousedown 而不是 click 触发提交 -->
    <span
      v-show="isFocused"
      @mousedown="handleSubmit"
      style="color: var(--primary-color); cursor: pointer"
    >
      提交
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "", // 存储输入框内容
      isFocused: false, // 控制按钮显示与否
    };
  },
  methods: {
    handleFocus() {
      this.isFocused = true; // 输入框聚焦时显示提交按钮
      console.log("聚焦了"); // 调试：检查聚焦时是否执行
    },
    handleBlur() {
      // 使用延迟处理，确保点击时触发提交
      setTimeout(() => {
        this.isFocused = false; // 输入框失焦时隐藏提交按钮
        console.log("失去焦点"); // 调试：检查失去焦点时是否执行
      }, 200); // 延迟 200ms 来确保点击事件先执行
    },
    handleSubmit() {
      console.log("handleSubmit 被调用"); // 确认点击时是否进入此方法
      console.log("当前输入值:", this.inputValue); // 打印当前输入框的值
      if (this.inputValue.trim()) {
        console.log("提交:", this.inputValue); // 确认提交逻辑是否正确执行
        // 提交后清空输入框
        this.inputValue = "";
      } else {
        console.log("输入框为空，不能提交");
      }
    },
  },
};
</script>
