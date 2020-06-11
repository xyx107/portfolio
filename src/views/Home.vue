<template>
  <div class="home">
      <base-header class="header"/>
      <base-main class="main"/>
      <base-footer class="footer"/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
#home{
  height: 100vh;
}
.header{
  height: 50px;
}
.main{
  height: calc(100vh - 50px);
}
.footer{
  
}
</style>
