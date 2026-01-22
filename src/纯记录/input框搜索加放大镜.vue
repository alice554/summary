<template>
  <div style="width: 23%" class="search-wrapper">
    <el-input
      v-model="searchParams.ruleName"
      placeholder="请输入你查找的规则名称"
      @keyup.enter.native="handleSearch"
    >
    </el-input>
    <i class="el-icon-search search-icon" @click="handleSearch"></i>
  </div>
</template>
<style scoped>
.search-wrapper {
  position: relative;
  display: inline-block;
  width: 300px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  /* 调整颜色和透明度，使其更自然 */
  color: #c0c4cc;
  font-size: 16px;
  transition: color 0.3s;
}

.search-icon:hover {
  color: #409eff;
}

/* 当输入框聚焦时，图标颜色变化 */
.search-wrapper:focus-within .search-icon {
  color: #409eff;
}
</style>