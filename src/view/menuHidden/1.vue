<template>
  <div>
    <el-button @click="visible = !visible" class="hover-button">
      <i class="el-icon-menu"></i> 历史问答
    </el-button>

    <el-popover
      v-model="visible"
      placement="bottom-start"
      trigger="manual"
      popper-class="custom-dropdown-menu"
    >
      <div class="scroll-wrapper">
        <div
          v-for="(item, index) in dropdownItems"
          :key="index"
          class="dropdown-item-container"
        >
          <span class="item-label" @click="handleCommand(item.command)">
            {{ item.label }}
          </span>
          <el-button
            icon="el-icon-close"
            class="delete-button"
            @click.stop="handleDelete(index)"
          ></el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dropdownItems: [
        { label: "选项1", command: "option1" },
        {
          label:
            "选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2",
          command: "option2",
        },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
        { label: "选项1", command: "option1" },
        { label: "选项2", command: "option2" },
        { label: "选项3", command: "option3" },
      ],
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      const popover = this.$el.querySelector(".el-popover");

      // 如果当前点击的不是弹窗内部，且不是 confirm 弹窗，就关闭
      const clickedEl = event.target;

      const isInsidePopover = this.$el.contains(clickedEl);
      const isConfirmBox = document
        .querySelector(".el-message-box__wrapper")
        .contains(clickedEl);

      if (!isInsidePopover && !isConfirmBox && this.visible) {
        this.visible = false;
      }
    },
    handleCommand(command) {
      this.$message(`你点击了: ${command}`);
    },
    handleDelete(index) {
      this.$confirm("确定删除这一项吗？", "提示", {
        type: "warning",
        closeOnClickModal: false,
        closeOnPressEscape: false,
      })
        .then(() => {
          this.dropdownItems.splice(index, 1);
          this.$message.success("删除成功");
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.hover-button {
  padding: 10px 15px;
  background-color: #409eff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.hover-button:hover {
  background-color: #66b1ff;
}

.scroll-wrapper {
  max-height: 300px;
  overflow-y: auto;
  min-width: 200px;
}

.dropdown-item-container {
  position: relative;
  padding-right: 30px;
  padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
}
.dropdown-item-container:hover {
  background-color: #e6f7ff;
}

.item-label {
  display: inline-block;
  width: calc(100% - 30px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.delete-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  color: #f56c6c;
}
</style>
