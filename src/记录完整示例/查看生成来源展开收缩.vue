<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id" class="list-item">
        <div class="actions">
          <span @click.stop="toggleSource(item.id)">查看生成来源</span>
          <span @click="like(item.id)">👍</span>
          <span @click="dislike(item.id)">👎</span>
          <span @click="copy(item.text)">📋</span>
        </div>

        <!-- 移除 accordion 属性，允许同时展开多个 -->
        <el-collapse v-model="activeSources">
          <el-collapse-item :name="item.id">
            <div class="source-content">
              {{ item.source }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, text: "第一条内容", source: "出处1" },
        { id: 2, text: "第二条内容", source: "出处2" },
        { id: 3, text: "第三条内容", source: "出处3" },
      ],
      activeSources: [], // 改为数组，存储多个展开的ID
    };
  },
  methods: {
    toggleSource(id) {
      const index = this.activeSources.indexOf(id);
      if (index > -1) {
        // 如果已存在则移除（关闭）
        this.activeSources.splice(index, 1);
      } else {
        // 否则添加（展开）
        this.activeSources.push(id);
      }
    },
    like(id) {
      console.log("点赞", id);
    },
    dislike(id) {
      console.log("点踩", id);
    },
    copy(text) {
      navigator.clipboard.writeText(text);
      console.log("复制", text);
    },
  },
};
</script>

<style scoped>
/* 样式保持不变 */
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 8px;
}
.actions span {
  margin-right: 10px;
  cursor: pointer;
}
.source-content {
  padding: 10px;
  background: #f5f5f5;
}
</style>