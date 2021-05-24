<template>
  <div class="contact-container">
        <h1 class="ex-title">Contact</h1>
        <div class="snss">
          <a :href="twitter"><i class="fab fa-twitter sns"></i>Twitter</a><br>
          <p class="toggle" v-on:click="lineshow"><i class="fab fa-line sns"></i>LINE<i class="fas fa-sort-down"></i></p><br>
          <transition name="imgFade">
            <div class="lineqr" v-show="qrtoggle"><img :src="linecode" class="QRimg" width="180" height="180"></div>
          </transition>
          <a :href="insta"><i class="fab fa-instagram-square sns"></i>Instagram</a><br>
          <a :href="git"><i class="fab fa-github-square sns"></i>GitHub</a><br>
          <p class="toggle" :href="mail" v-on:click="mailshow"><i class="fas fa-envelope-square sns"></i>Mail<i class="fas fa-sort-down"></i></p>
          <transition name="mailFade">
            <div class="mails" v-show="mailtoggle"><span>YAMABIKO.yamazusi@gmail.com</span><br><span>csak18138@g.nihon-u.ac.jp</span></div>
          </transition>
        </div>
      </div>
</template>
<script>
export default {
  data () {
    return {
      linecode: require('../assets/lineqr.jpg'),
      twitter: 'https://twitter.com/web37498513',
      insta: 'https://www.instagram.com/akira__0924/',
      git: 'https://github.com/akira-0924',

      qrtoggle: false,
      mailtoggle: false
    }
  },
  methods: {
    lineshow () {
      this.qrtoggle = !this.qrtoggle
    },
    mailshow () {
      this.mailtoggle = !this.mailtoggle
    }
  }
}
</script>

<style scoped>
.contact-container{
  padding-bottom:100px;
}
.contact-container a{
  text-decoration: none;
  color:rgb(62, 62, 62);
}
.snss{
  width:100%;
}
.toggle {
font-size:34px;
  display:inline-block;
  margin:4px auto;
  min-width: 200px;
  background-color: rgb(232, 232, 232);
}
.snss a{
  font-size:34px;
  display:inline-block;
  margin:4px auto;
  min-width: 200px;
  background-color: rgb(232, 232, 232);
}
.sns{
margin-right:10px;
}
.fa-twitter{
  color:rgb(0, 136, 255);
}
.fa-line{
  color:rgb(2, 213, 2);
}
.fa-instagram-square{
  color:rgb(255, 0, 183);
}
.fa-envelope-square{
  color:rgb(16, 207, 255);
}
.fa-sort-down{
  margin:0 0 4px 10px;
}
.lineqr{
  width:200px;
  height:200px;
  background-color: rgb(222, 222, 222);
  margin:0 auto
}
.mails{
  font-size:30px;
  font-weight: bold;
  width:60%;
  margin:0 auto;
}
.mails span{
  display: inline-block;
  margin:10px 0;
  border-bottom:2px solid rgb(52, 52, 52) ;
}
.QRimg{
  padding-top:10px;
}
.imgFade-leave-active{
  transition: all ease .6s;
}
.imgFade-enter-active {
    transition: all ease 1s;
    opacity: 0;
    transform: translateY(-20px);
}
.imgFade-enter-to {
  opacity: 1;
  transform: translateY(0px)
}
.imgFade-leave-to {
    opacity: 0;
}
.mailFade-leave-active{
  transition: all ease .6s;
}
.mailFade-enter-active {
    transition: all ease 1s;
    opacity: 0;
}
.mailFade-enter-to {
  opacity: 1;
}
.mailFade-leave-to {
    opacity: 0;
}

@media screen and (max-width:600px) {
  .mails span{
    font-size:20px;
  }
}
</style>
