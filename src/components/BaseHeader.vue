<template>
  <div id="header">
    <div id="nav">
      <a href="#header">About</a> |
      <a href="#main">Work</a> |
      <a href="#footer">Contact</a>
    </div>
    <div class="title">
        Hey I am Weiran You 
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
    name: 'base-header'

}
</script>

<style lang="scss" scoped>
#header{
  
}
#nav {
  position: fixed;
  background-color: rgb(190, 49, 68);
  padding: 30px;
  width: 100%;
  a {
    font-size: 2.1rem;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.title{
  padding-top: 300px;
}
</style>
