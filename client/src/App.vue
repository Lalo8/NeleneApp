<template>
  <div id="app">
      <nav class="navbar is-primary is-transparent">
        <div class="navbar-brand">
           <a class="navbar-item" href="/">
          <h1 class="titlelogo"> NEL&#398;NE</h1>
           </a>
          <div class="navbar-burger burger" data-target="navDropping" :class="{'is-active': active }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navDropping" class="navbar-menu" :class="{'is-active': active }">
          
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/overview" class="navbar-link">
                  Overview
                </router-link>    
                <router-link v-if="!$root.user" to="login" class="navbar-link">
                  Login
                </router-link>   
                <router-link v-if="!$root.user" to="signup" class="navbar-link">
                  Signup
                </router-link> 
                <div v-if="$root.user" >
                 <router-link v-if="$root.user.isAdmin" to="/admin" class="navbar-link">
                 All organisations
                </router-link> 
                 <router-link to="/" class="navbar-link" v-else>
                 All organisations
                </router-link> 
                </div>
                 <router-link v-if="$root.user" to="/profile" class="navbar-link">
                 My organisations
                </router-link> 
                 <router-link v-if="$root.user" to="/organisations/add" class="navbar-link">
                 Add an organisation
                </router-link>  
                 <a v-if="$root.user" class="navbar-link"@click.prevent="logout"href="#">Logout</a> 

                <b-dropdown v-model="navigation" v-if="$root.user"position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
                      <b-icon class="profile" icon="address-card">
                      </b-icon> 
                      <span class="profile">My profile</span>
                    </a>
                    <b-dropdown-item custom>
                      <b-icon icon="person">
                      </b-icon>
                      Logged as <b>{{$root.user.name}}</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
          
                    <!-- <b-dropdown-item value="home" v-if="$root.user.isAdmin">
                      <b-icon icon="home">
                      </b-icon>
                        <a href='/admin'>All organisations</a>  
                    </b-dropdown-item> -->
                    <b-dropdown-item value="home">
                      <b-icon icon="home">
                      </b-icon>
                        <a href='/'>All organisations</a> 
                    </b-dropdown-item>
                    <b-dropdown-item value="home">
                      <b-icon icon="check">
                      </b-icon>
                        <a href='/profile'>My organisations</a>
                    </b-dropdown-item>
                    <b-dropdown-item value="home">
                      <b-icon icon="plus">
                      </b-icon>
                        <router-link  to='/organisations/add'>Add an organisation</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="logout">
                      <b-icon icon="sign-out">
                      </b-icon> 
                        <a @click.prevent="logout"href="#">Logout</a> 
                    </b-dropdown-item>
                </b-dropdown>
            </div>
          </div>
        </div>
      </nav>
    <section>
      <div>
        <router-view>
        </router-view> 
      </div>
    <div class="mainfooter">
      Made with <i class="em em-smile"></i> by Elodie WANANG // Ironhack Final Project 
    </div>
       <!-- <aside class="menu" v-if="$root.user">
                  <p class="menu-label">
                    General
                  </p>
                  <ul class="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a>Customers</a></li>
                  </ul>
                  <p class="menu-label">
                    Administration
                  </p>
                  <ul class="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                      <a class="is-active">Manage Your Team</a>
                      <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                      </ul>
                    </li>
                    <li><a>Invitations</a></li>
                    <li><a>Cloud Storage Environment Settings</a></li>
                    <li><a>Authentication</a></li>
                  </ul>
                  <p class="menu-label">
                    Transactions
                  </p>
                  <ul class="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                  </ul>
                 </aside> -->
    </section>
  </div>
</template>

<script>
import { logout, checkUser, getOrganisation } from "@/api/auth";
export default {
  name: "app",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      active: false,
      organisations: [],
      isAdmin: true,
      navigation: null
    };
  },
  created() {
    checkUser(this.$root);
  },
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }

    // toggled() {
    //   this.active =!this.active;
    // }
  }
};
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>

<style>
body,
html {
  height: 100%;
}
.titlelogo {
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.navbar {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 600;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
.profile {
  color: white;
  margin-right: 10px;
}

.subnavbar {
  height: 200px;
  text-align: center;
  background-color: #795cd2;
}

.subnavbar h1 {
  padding-top: 30px;
  font-size: 80px;
  color: white;
}
.subnavbar img {
  max-width: 35%;
}

.navbar-link::after {
  border-color: none;
  border: none;
}

.mainfooter {
  width: 100%;
  height: 70px;
  background-color: #795cd2;
  text-align: center;
  padding-top: 20px;
  color: white;
  bottom: 0;
  position: absolute;
}
</style>
