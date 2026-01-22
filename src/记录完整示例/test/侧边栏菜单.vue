<!-- Sidebar.vue -->
<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <!-- 顶部 Logo + 收缩按钮 -->
    <div class="sidebar-top">
      <div class="logo">Logo</div>
      <button @click="toggleCollapse">{{ isCollapsed ? ">" : "<" }}</button>
    </div>

    <!-- 菜单区 -->
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li
          v-for="item in menu"
          :key="item.name"
          class="menu-item"
          @mouseenter="hoverItem = item"
          @mouseleave="hoverItem = null"
          @click="handleClick(item)"
        >
          <i :class="item.icon"></i>
          <span v-if="!isCollapsed">{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <!-- 底部可点击菜单 -->
    <div class="sidebar-bottom" @click="showBottomMenu = !showBottomMenu">
      <i class="el-icon-setting"></i>
      <span v-if="!isCollapsed">更多</span>
    </div>

    <!-- 弹出子菜单（收缩状态点击主菜单） -->
    <div
      class="popup-submenu"
      v-if="isCollapsed && hoverItem && hoverItem.children"
      :style="{ top: submenuPosition + 'px' }"
    >
      <ul>
        <li v-for="child in hoverItem.children" :key="child.name">
          {{ child.name }}
        </li>
      </ul>
    </div>

    <!-- 底部弹出子菜单 -->
    <div class="bottom-submenu" v-if="showBottomMenu">
      <ul>
        <li v-for="item in bottomMenu" :key="item.name">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      hoverItem: null,
      showBottomMenu: false,
      submenuPosition: 0,
      menu: [
        { name: "首页", icon: "el-icon-house" },
        {
          name: "系统管理",
          icon: "el-icon-setting",
          children: [{ name: "用户管理" }, { name: "角色管理" }],
        },
        // 更多菜单项...
      ],
      bottomMenu: [{ name: "帮助" }, { name: "关于" }],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    handleClick(item) {
      if (this.isCollapsed && item.children) {
        const itemIndex = this.menu.findIndex((m) => m.name === item.name);
        this.submenuPosition = itemIndex * 48 + 60; // 计算大致的 top
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #2d3a4b;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: width 0.3s;
}
.sidebar.collapsed {
  width: 60px;
}
.sidebar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.menu-wrapper {
  flex: 1;
  max-height: 70vh;
  overflow-y: auto;
  padding: 5px 0;
}
.menu-wrapper::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.menu-item i {
  margin-right: 10px;
}
.sidebar-bottom {
  padding: 10px;
  cursor: pointer;
  border-top: 1px solid #444;
}
.popup-submenu {
  position: absolute;
  left: 200px;
  background: #34495e;
  z-index: 1000;
  padding: 10px;
  border-radius: 4px;
}
.bottom-submenu {
  position: absolute;
  bottom: 50px;
  background: #34495e;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #444;
}
</style>
