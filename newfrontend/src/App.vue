<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
// import Dependency from 'dependency';
// import IndexPage from './views/IndexPage.vue'
export default {
  name: 'App',
  components: {
    // Dependency,
    // IndexPage
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding: 0;
}
</style>
