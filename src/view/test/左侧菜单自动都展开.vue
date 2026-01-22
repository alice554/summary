<template>
  <div class="audit-menu-container">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="menu-card">
          <h3 class="menu-title">知识审核系统</h3>
          <el-menu
            default-active="1-1"
            class="audit-menu"
            background-color="#f5f7fa"
            text-color="#333"
            active-text-color="#409EFF"
            :default-openeds="['1', '2']"
          >
            <!-- 部门知识审核 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-office-building"></i>
                <span>部门知识审核</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-time"></i>
                <span>待审核</span>
                <el-badge :value="12" class="badge"></el-badge>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-success"></i>
                <span>审核通过</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-error"></i>
                <span>驳回</span>
                <el-badge :value="5" class="badge"></el-badge>
              </el-menu-item>
            </el-submenu>

            <!-- 个人知识审核 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>个人知识审核</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-time"></i>
                <span>待审核</span>
                <el-badge :value="8" class="badge"></el-badge>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-success"></i>
                <span>审核通过</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-error"></i>
                <span>驳回</span>
                <el-badge :value="3" class="badge"></el-badge>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.audit-menu-container {
  padding: 20px;
}

.menu-card {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.menu-title {
  padding: 15px 20px;
  margin: 0;
  background: #409eff;
  color: white;
  font-size: 18px;
}

.audit-menu {
  border-right: none;
}

.audit-menu .el-submenu__title,
.audit-menu .el-menu-item {
  height: 50px;
  line-height: 50px;
}

.audit-menu .el-menu-item {
  display: flex;
  align-items: center;
}

.audit-menu .el-menu-item i {
  margin-right: 10px;
}

.badge {
  margin-left: auto;
}

.el-badge /deep/ .el-badge__content {
  top: 16px;
  right: 10px;
}
</style>