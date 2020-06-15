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
  height: 100vh;
  background-color: rgb(48, 56, 65);
}
.main{
  background-color: rgb(69, 86, 125);
}
.footer{
  height: 80vh;
}
</style>
