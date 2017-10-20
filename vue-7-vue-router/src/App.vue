<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="friends/1/2/3">Friends</router-link>
    <router-link to="account">Account</router-link>
    <router-link to="contact">Contact</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
