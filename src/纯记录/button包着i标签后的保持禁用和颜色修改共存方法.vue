<template>
  <el-button
    :disabled="radio !== 1 || uploadedSingleFile.length > 0"
    style="
      border-radius: 50%;
      padding: 0px;
      border: none;
      background-color: none;
    "
    plain
    class="chatUploadButton"
  >
    <i
      class="iconfont icon-ic_attach_file_px"
      :class="{
        'disabled-icon': radio !== 1 || uploadedSingleFile.length > 0, //最重要的地方
      }"
      :style="{
        color:
          radio === 0
            ? '#797979'
            : uploadedSingleFile.length > 0
            ? '#797979'
            : 'var(--primary-color)',
        cursor: radio === 0 ? 'default' : 'pointer',
      }"
      @click="triggerFileUpload"
    />
  </el-button>
</template>
<style scoped>
.disabled-icon {
  color: #797979 !important;
  cursor: not-allowed !important;
  opacity: 0.6;
}
.icon-ic_attach_file_px {
  font-size: 24px;
  margin-right: 7px;
}
</style>