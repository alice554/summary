<template>
  <div>
    <div style="text-align: center">text-align:center 居中</div>
    <div v-for="(items, group) in groupedList" :key="group">
      <h3>{{ group }}</h3>
      <ul>
        <li v-for="item in items" :key="item.name + item.time">
          {{ item.name }} - {{ item.time }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      list: [
        { name: "张三", time: "2025-06-06 10:00:00" },
        { name: "李四", time: "2025-06-05 09:00:00" },
        { name: "王五", time: "2025-06-01 12:00:00" },
        { name: "赵六", time: "2025-05-15 08:00:00" },
        { name: "赵六", time: "2025-05-15 08:00:00" },
        { name: "赵六", time: "2025-05-15 08:00:00" },
        { name: "赵六", time: "2025-05-15 08:00:00" },
      ],
    };
  },
  computed: {
    groupedList() {
      const today = dayjs().startOf("day");
      const yesterday = dayjs().subtract(1, "day").startOf("day");
      const sevenDaysAgo = dayjs().subtract(6, "day").startOf("day");
      const thirtyDaysAgo = dayjs().subtract(29, "day").startOf("day");

      const groups = {
        今天: [],
        昨天: [],
        近七天: [],
        "30天内": [],
      };

      this.list.forEach((item) => {
        const itemDate = dayjs(item.time);
        if (itemDate.isAfter(today)) {
          groups.今天.push(item);
        } else if (itemDate.isAfter(yesterday)) {
          groups.昨天.push(item);
        } else if (itemDate.isAfter(sevenDaysAgo)) {
          groups["近七天"].push(item);
        } else if (itemDate.isAfter(thirtyDaysAgo)) {
          groups["30天内"].push(item);
        }
      });

      return groups;
    },
  },
};
</script>