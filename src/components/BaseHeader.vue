<template>
  <div >
      <div id="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script type="text/javascript">
export default {
    name: 'base-header'

}
</script>

<style lang="scss" scoped>
#header {
  background-color: #000;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
