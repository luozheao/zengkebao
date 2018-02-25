<template>
  <div id="app">
    <div  class="header">赠客宝</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.header{
  height: 75px;
  line-height: 75px;
  text-align: center;
  font-size:32px;/*px*/
  background: white;
}
</style>
