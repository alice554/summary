<div v-if="show1">
<div>父亲 </div>

<div v-if="show2"> 孩子</div>
</div>
show1 = true， show2 = false时整个都不显示了


想要显示父亲不显示孩子就：把v-if="show2"  改为v-show="show2"  这个只对项目中的其效果！！！！！！！！！并不通用，需要分析
  <template>
  <div class="ai-editor-wrapper" :style="actionsMenuStyle" v-if="isAIEditing">
    <!-- 输入态 -->
    <div class="editor-input">
      <el-input
        type="textarea"
        v-model="inputText"
        ref="editingInput"
        :autosize="{ minRows: 4, maxRows: 10 }"
        :rows="3"
        style="width: 100%; min-width: 600px; max-width: 800px"
        resize="both"
        placeholder="输入文档编辑指令"
      />
      <div class="footer">
        <label>
          <input type="checkbox" ref="actionInput" v-model="useKnowledgeBase" />
          参考知识库
        </label>
        <button @click="handleSend">发送</button>
      </div>
    </div>
    <!-- 操作列表 -->
    <ul class="action-list" v-show="editMenus">
      <!-- <li @click="replaceSelectedText()">替换</li>
        <li @click="insertText()">插入</li>
        <li @click="applyFormat('normal')">正文</li>
        <li @click="applyFormat('bold')">加粗</li>
        <li @click="applyFormat('italic')">斜体</li>
        <li @click="applyFormat('h1')">一级标题</li>
        <li @click="applyFormat('h2')">二级标题</li>
        <li @click="applyFormat('quote')">引用</li> -->
      <li @click="performAction('polish')">润色</li>
      <li @click="performAction('expand')">扩写</li>
      <li @click="performAction('contract')">缩写</li>
      <li @click="performAction('continue')">续写</li>
      <li @click="performAction('proofread')">校对</li>
      <li @click="performAction('summarize')">总结</li>
    </ul>
  </div>
</template>
    <script>
export default {
  handleClickOutside(event) {
    console.log("触发了点击外部", this.showActionsMenu);
    if (this.ignoreAiEditorTextClick) {
      this.ignoreAiEditorTextClick = false;
      return;
    }
    //点击编辑框不会触发隐藏
    const aiEditorWrapper = event.target.closest(".ai-editor-wrapper");
    console.log("aiEditorWrapper", aiEditorWrapper);

    // 如果点击发生在 .ai-editor-wrapper 内部，则不隐藏
    if (aiEditorWrapper) {
      return;
    }
    // const editingInput = this.$refs.editingInput; // 获取 checkbox 的外层 DOM

    // if (editingInput) {
    //   return;
    // }
    // if (this.showActionsMenu && this.isAIEditing) return;  能实现 但是第一个没消除 可做遮挡
    // 🔒 刚由选区触发的 click，直接忽略
    if (this.justOpenedBySelection) return;
    console.log("真正点击外部空白处了");

    const inputWrapper = this.$refs.actionInput?.$el;
    if (inputWrapper && inputWrapper.contains(event.target)) {
      return;
    }
    this.showActionsMenu = false;
    this.isAIEditing = false;
    this.editMenus = true;
  },
};
</script>
    为什么改为v-show就不触发handleClickOutside，v-if就触发
    为什么v-show就能看见父亲，v-if就什么都看不见 

    结论！！！！！！！！！！！
    
    v-if 会把 DOM 从页面上“物理删除”，
导致 event.target.closest(...) 失效，
所以 handleClickOutside 里的 return 根本进不去。

v-show DOM 还在，只是 display:none，
所以 closest() 还能命中，函数被 return 掉。