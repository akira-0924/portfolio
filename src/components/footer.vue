<template>
  <div class="footer-container">
    <div class="fo-content">
      <router-link to="/" class="selection"><i class="fas fa-user select-icon"></i>Profile</router-link>
      <router-link to="/Product" class="selection"><i class="fas fa-broom select-icon"></i>Product</router-link>
      <router-link to="/experience" class="selection"><i class="fas fa-clock select-icon"></i>Experience</router-link>
      <router-link to="/about" class="selection"><i class="fas fa-clone select-icon"></i>About</router-link>
    </div>
  </div>
  <div class="copylite">
  <span>Copyright©︎ Akira Mizushima</span>
  </div>
</template>
<style scoped>
.footer-container{
  width:100%;
  height:100px;
  background-color: rgb(65, 65, 65);
}
.fo-content{
  width:100%;
  height:100px;
}
.fo-content a{
  display: inline-block;
  color:white;
  text-decoration: none;
  margin:30px 60px;
  font-size:24px;
}
.copylite{
  height:20px;
  background-color: rgb(65, 65, 65);
  padding:10px 0;
  color:rgb(164, 164, 164);
}
.select-icon{
    display: inline-block;
    margin-right:6px;
  }

@media screen and (max-width:480px) {
  .fo-content a{
  margin:10px;
  font-size:28px;
  }
  .footer-container{
  height:120px;
  }
}
</style>
