<template>
  <div>
    Array.from() 只能转换以下两种结构： 类数组对象：必须有 length
    属性和数字索引键（0, 1, 2...） 可迭代对象：必须实现了 [Symbol.iterator] 方法
    类数组举例子：1.arguments 对象 2.NodeList 对象 3.HTMLCollection 对象
    4.字符串（特殊：既是类数组也是可迭代） 5.自定义的类数组对象
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>