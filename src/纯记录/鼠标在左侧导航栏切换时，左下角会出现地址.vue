 
 <template>   
 <div v-if="!item.hidden" class="menu-wrapper">
    <div
      class="top-menu"
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <el-tooltip
        effect="dark"
        :content="onlyOneChild.meta.title"
        placement="right"
        :disabled="!collapse"
      >
        <router-link
          v-if="onlyOneChild.meta"
          :to="resolvePath(onlyOneChild.path)"
          :name="onlyOneChild.name"
          class="no-style-link"
          :style="{ pointerEvents: 'none' }"
          :tabindex="-1"
        >
          <el-menu-item
            :index="resolvePath(onlyOneChild.path)"
            :default-active="activeIndex"
            :class="[
              { 'submenu-title-noDropdown': !isNest },
              {
                'guide-free-question':
                  resolvePath(onlyOneChild.path) === '/generalQA',
              },
              {
                'guide-knowledge-question':
                  resolvePath(onlyOneChild.path) === '/knowledgeQA',
              },
            ]"
          >
            <img
              v-if="!isNest"
              :src="getIconByTitle(onlyOneChild.meta.title)"
              class="menu-icon"
              :class="{
                active: resolvePath(onlyOneChild.path) === activeIndex,
              }"
            />

            <item
              :title="onlyOneChild.meta.title"
              :class="{ 'collapsed-menu-item': collapse }"
              v-if="!collapse"
            />
          </el-menu-item>
        </router-link>
      </el-tooltip>
    </div>
    </template>
<!-- 下面这段代码是新加的,解决这个问题的  主要在于去除router-link中的 a 标签的href属性 -->
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.removeLinkTitles();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.removeLinkTitles();
    });
  },
  methods: {
    removeLinkTitles() {
      const links = document.querySelectorAll(".menu-wrapper a[href]");
      links.forEach((link) => {
        link.removeAttribute("title");
        link.removeAttribute("href");
      });
    },
  },
};
</script>
