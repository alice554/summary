<template>
  <pagination
    class="custom-pagination"
    :page="searchParams"
    :total="total"
    :page-sizes="[10, 20, 50]"
    :pager-count="5"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
import pagination from "@/views/components/pagination.vue";
export default {};
</script>

<style>
</style>