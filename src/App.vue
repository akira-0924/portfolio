<template>
  <div class="topback">
    <h2>AKIRA MIZUSHIMA's PORTFOLIO</h2>
  </div>
  <div id="nav">
    <router-link to="/Profile" class="selection"><i class="fas fa-user select-icon"></i>Profile</router-link>
    <router-link to="/Product" class="selection"><i class="fas fa-broom select-icon"></i>Product</router-link>
    <router-link to="/experience" class="selection"><i class="fas fa-clock select-icon"></i>Experience</router-link>
    <router-link to="/about" class="selection"><i class="fas fa-clone select-icon"></i>About</router-link>
  </div>
  <router-view/>
  <footer1 msg="水島アキラ"/>
</template>
<script>
// @ is an alias to /src
import footer1 from './components/footer.vue'

export default {
  name: 'App',
  components: {
    footer1
  }
}
</script>

<style lang="scss">
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100%;
}

#nav {
  padding: 20px 10px 30px 10px;

  a {
    display:inline-block;
    font-weight: bold;
    color: #2c3e50;
    margin:0px 40px;
    font-size:30px;
    text-decoration: none;
    text-shadow: 2px 2px 1px rgb(167, 167, 167);

    &.router-link-exact-active {
      color: #ff991c;
    }
  }
  .select-icon{
    display: inline-block;
    margin-right:6px;
  }
}
.topback{
    width:100%;
    height:360px;
    background-image: url("./assets/top10.jpg");
    background-size: cover;
    color:rgb(237, 237, 237);
    font-size:30px;
    text-shadow: 4px 4px 2px rgb(65, 65, 65);
    position:relative;
    z-index:1;
    background-attachment: fixed;
    background-repeat:no-repeat;

  h2{
    float: left;
  }
  }
.topback::before{
content:"";
  width:100%;
  height:360px;
  position:absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(0, 0, 0,0.3);
}

@media screen and (max-width:600px) {
  #nav{
      .selection{
          font-size:28px;
          margin-top:20px;
      }
  }
}
</style>
