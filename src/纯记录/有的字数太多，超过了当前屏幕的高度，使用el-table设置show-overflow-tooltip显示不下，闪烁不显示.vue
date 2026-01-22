<template>
  <div>
    <el-table-column
      prop="answer"
      label="答案"
      :show-overflow-tooltip="true"
      class="faqAnswer"
    />
    <!-- 换成下面的代码     -->
    <el-table-column label="答案" prop="answer">
      <template #default="scope">
        <el-tooltip
          effect="dark"
          placement="top"
          :open-delay="300"
          popper-class="faq-tooltip"
        >
          <template #content>
            <div class="faq-tooltip-content">
              {{ scope.row.answer }}
            </div>
          </template>
          <span class="cell-content">{{ scope.row.answer }}</span>
        </el-tooltip>
      </template>
    </el-table-column>
  </div>
</template>
<style lang="scss" scoped>
.faq-tooltip-content {
  max-width: 600px;
  max-height: 300px;
  overflow-y: auto;
  white-space: normal;
  word-break: break-word;
}
.cell-content {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Webkit 浏览器 (Chrome/Edge/Safari) */
.faq-tooltip-content::-webkit-scrollbar {
  width: 6px; /* 滚动条宽度 */
}
.faq-tooltip-content::-webkit-scrollbar-track {
  background: transparent; /* 轨道透明 */
}
.faq-tooltip-content::-webkit-scrollbar-thumb {
  background-color: #d9d9d9; /* 灰色滑块，接近原来轨道颜色 */
  border-radius: 3px;
}

/* Firefox */
.faq-tooltip-content {
  scrollbar-width: thin;
  scrollbar-color: #d9d9d9 transparent; /* 灰色 thumb + 透明轨道 */
}
</style>