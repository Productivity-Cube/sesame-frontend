<template>
  <div id="app">
    <div class="home">
      <img alt="MDB logdo" src="../assets/logo.png">
      <Login/>
    </div>
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 150px;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
