<template>
  <div ref="dropdownRef" class="dropdown-wrapper" style="position: relative">
    <!-- 触发按钮 -->
    <span class="hover-button" @click="toggleDropdown">
      <i class="el-icon-menu"></i> 历史问答11111
    </span>

    <!-- 自定义下拉菜单（保留原样式） -->
    <div v-if="visible" class="custom-dropdown-menu">
      <div class="scroll-wrapper">
        <div
          v-for="(item, index) in dropdownItems"
          :key="index"
          class="dropdown-item-container"
        >
          <span class="item-label" @click="handleCommand(item.command)">
            {{ item.label }}
          </span>
          <!-- <el-button
            native-type="button"
            icon="el-icon-close"
            class="delete-button"
            @click.stop="handleDelete(index)"
          ></el-button> -->
          <i
            class="el-icon-close delete-icon"
            @click.stop="handleDelete(index)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dropdownItems: [
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        {
          label:
            "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1",
          command: "option1",
        },
        { label: "选项2", command: "option2" },
        // ...
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.visible = !this.visible;
    },
    handleCommand(command) {
      this.$message(`你点击了: ${command}`);
    },
    handleDelete(index) {
      this.$confirm("确定删除这一项吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          this.dropdownItems.splice(index, 1);
          this.$message.success("删除成功");
        })
        .catch(() => {});
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdownRef;
      const confirmBox = document.querySelector(".el-message-box__wrapper");
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        !(confirmBox && confirmBox.contains(event.target))
      ) {
        this.visible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
/* 原 hover-button 样式 */
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

/* 下拉菜单样式（原样恢复） */
.custom-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 2000;
  width: 250px;
}

/* 滚动区域 */
.scroll-wrapper {
  max-height: 400px;
  overflow-y: auto;
}

.dropdown-item-container {
  position: relative;
  padding: 5px 20px;
  font-size: 14px;
  color: #606266;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.dropdown-item-container:hover {
  background-color: #f5f5f5;
  color: var(--primary-color);
}

/* 标签内容 */
.item-label {
  display: inline-block;
  width: calc(100% - 30px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .delete-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  color: #f56c6c;
  font-size: 12px;
}
.delete-button:hover {
  color: #ff0000;
} */
.delete-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #c1c1c1;
  cursor: pointer;
  opacity: 0;
}
.dropdown-item-container:hover .delete-icon {
  opacity: 1;
}
/* .delete-icon:hover {
color: #c1c1c1;;
} */

/* 自定义滚动条（同原样式） */
::-webkit-scrollbar {
  width: 6px;
  height: 2px;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
  transition: background 0.3s;
}
::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
