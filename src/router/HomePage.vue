<template>
  <div class="hello">
    <h1 class="title" >{{ msg }}</h1>
    <div class="homecategory">
     <div class="cat">
      <a href="https://nelene.herokuapp.com/"><h1>At a glance</h1></a>
     </div>
     <div class="cat">
      <a href=""><h1>Customized</h1></a>
     </div>
    </div>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Let\'s take a look at african tech ecosystem !'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.title {
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.homecategory{
   height: 600px;
    width: 100%;
    color: black;
    display: flex;
    justify-content: center;
}

.cat {
  padding: 200px;
  font-size: 50px;
}

</style>
