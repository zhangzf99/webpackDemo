<template>
  <div class="add">
    {{ msg }}
    <div class="box">
      我是图片
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是文字22311'
    }
  }
}
</script>

<style scoped lang="less">
  .add {
    color: aqua;
    .box {
      color: red;
    }
  }
</style>