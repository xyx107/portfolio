<template>
  <div class="home">
      <base-header class="header"/>
      <base-main class="main"/>
      <base-footer class="footer"/>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {

  }
}
</script>

<style lang="scss" scoped>
#home{
  // height: 100vh;
}
.header{
  height: 100vh;
}
.main{
  // position: absolute;
  height: 100vh;
}
.footer{
  // position: absolute;
  height: 90vh;
}
</style>
