<template>
<div id="app">

<nav class="navbar is-primary">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <div class="navbar-burger burger" data-target="navMenuTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <router-link v-if="!$root.user" to="login" class="navbar-link ">
          Login
        </router-link>   
        <router-link v-if="!$root.user" to="signup" class="navbar-link ">
          Signup
        </router-link>   
        <a  @click.prevent="logout" v-if="$root.user" class="navbar-link " >
          Logout
        </a>   
      </div>
    </div>
  </div>
</nav>
<div class="subnavbar is-primary">
<h1>NEL℈NE</h1>
</div>

<section>
<div class="container">
    <router-view></router-view>
  </div>
</section>
</div>
</template>

<script>
import { logout } from '@/api/auth'
export default {
  name: 'app',
  methods: {
    logout () {
      logout(this.$root)
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.container {
  margin-top:50px;
}


.subnavbar{
  height:200px;
  text-align: center;
  background-color: #795CD2;
}

.subnavbar h1 {
  padding-top : 30px;
  font-size:80px;
  color: white;
}
</style>
