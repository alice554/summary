<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @cell-mouse-enter="handleMouseEnter"
    @cell-mouse-leave="handleMouseLeave"
  >
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />

    <el-table-column label="操作" align="center" width="100">
      <template slot-scope="scope">
        <div v-if="hoverRowIndex === scope.$index">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="editRow(scope.row)"
          />
          <el-button
            type="text"
            icon="el-icon-delete"
            @click="deleteRow(scope.row)"
          />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: "张三", age: 20 },
        { name: "李四", age: 25 },
        { name: "王五", age: 30 },
      ],
      hoverRowIndex: null,
    };
  },
  methods: {
    handleMouseEnter(row, column, cell, event) {
      this.hoverRowIndex = this.tableData.indexOf(row);
    },
    handleMouseLeave(row, column, cell, event) {
      this.hoverRowIndex = null;
    },
    editRow(row) {
      console.log("编辑", row);
    },
    deleteRow(row) {
      console.log("删除", row);
    },
  },
};
</script>
