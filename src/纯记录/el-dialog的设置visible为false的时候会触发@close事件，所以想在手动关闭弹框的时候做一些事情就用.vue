








<template>
  <!-- el-dialog的设置visible为false的时候会触发@close事件，所以想在手动关闭弹框的时候做一些事情就用:before-close="handleBeforeClose".vue -->
  <el-dialog :before-close="handleBeforeClose"></el-dialog>
</template>