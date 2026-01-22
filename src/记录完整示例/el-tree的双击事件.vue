
<template>
  <div>
    <el-tree
      :data="tree"
      highlight-current
      node-key="id"
      :props="{
        children: 'children',
        label: 'name',
      }"
      ref="tree"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  methods: {
    //双击拿到
    handleNodeClick(data) {
      if (data.type < 13) {
        return;
      }
      console.log("双击前", data);
      const currentTime = new Date().getTime();
      // 判断是否为双击
      if (currentTime - this.lastClickTime < 300) {
        this.handleDbClick(data);
      }
      this.lastClickTime = currentTime;
    },
    handleDbClick(node) {
      console.log("双击节点", node);
      this.treePreviewFile(node);
    },
  },
  data() {
    return {
      tree: [
        {
          id: 1,
          name: "北京",
          children: [
            {
              id: 5,
              name: "朝阳",
              children: [
                {
                  id: 17,
                  name: "双塔",
                  children: [],
                },
                {
                  id: 18,
                  name: "龙城",
                  children: [],
                },
              ],
            },
            {
              id: 6,
              name: "丰台",
              children: [
                {
                  id: 19,
                  name: "新村",
                  children: [],
                },
                {
                  id: 20,
                  name: "大红门",
                  children: [],
                },
                {
                  id: 21,
                  name: "长辛店",
                  children: [
                    {
                      id: 22,
                      name: "东山坡",
                      children: [],
                    },
                    {
                      id: 23,
                      name: "北关",
                      children: [],
                    },
                    {
                      id: 24,
                      name: "光明里",
                      children: [],
                    },
                    {
                      id: 25,
                      name: "赵辛店",
                      children: [],
                    },
                    {
                      id: 26,
                      name: "西峰寺",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 7,
              name: "海淀",
              children: [],
            },
            {
              id: 8,
              name: "房山",
              children: [],
            },
            {
              id: 10,
              name: "顺义",
              children: [],
            },
          ],
        },
        {
          id: 2,
          name: "上海",
          children: [
            {
              id: 11,
              name: "黄埔",
              children: [],
            },
            {
              id: 12,
              name: "徐汇",
              children: [],
            },
          ],
        },
        {
          id: 3,
          name: "广州",
          children: [
            {
              id: 13,
              name: "荔湾",
              children: [],
            },
            {
              id: 14,
              name: "白云",
              children: [],
            },
            {
              id: 15,
              name: "越秀",
              children: [],
            },
            {
              id: 16,
              name: "南沙",
              children: [],
            },
          ],
        },
      ],
      currentName: "",
    };
  },
};
</script>