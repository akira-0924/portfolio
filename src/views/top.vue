<template>
  <div class="topback">
    <div class="typ-container">
      <div class="typ">
        <span class="typspan1">AKIRA </span><span class="typspan2">MIZUSHIMA's</span><br><span class="typ2">PORTFOLIO</span>
      </div>
    <div class="smart-view">
    <img :src="sumaho" width="300" height="500">
  </div>
    </div>
  </div>
  <transition name="loadfade">
  <router-view/>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      sumaho: require('../assets/941.png'),
      iphone: require('../assets/iphone.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.topback{
    width:100%;
    height:100vh;
    background-image: url("../assets/top10.jpg");
    background-size: cover;
    color:rgb(237, 237, 237);
    font-size:30px;
    letter-spacing: 6px;
    text-shadow: 4px 4px 2px rgb(65, 65, 65);
    position:relative;
    z-index:-1;
    background-attachment: fixed;
    background-repeat:no-repeat;
    overflow: hidden;

    .typ-container{
      width:100%;
      height:100%;
      display:flex;
      align-items: center;
      justify-content: space-around;
      }

    .typ{
      padding-bottom: 8px;
      color:rgba(218, 218, 218, 0.7);
      font-size:100px;
      transform: translate3d(0,0,0);
      width:60%;
      text-align: left;
      padding-left:100px;
      }
    .typspan1 {
      display: inline-block;
      animation: typing .5s .6s both,topstart2 1.2s ease both 1.9s,topstart3 .5s ease both 2.4s;
      padding-right:20px;
    }
    .typ2 {
      display: inline-block;
      animation: typing .5s 1.2s both,topstart2 1.2s ease both 1.9s,topstart3 .5s ease both 2.4s;
    }
    .typspan2 {
      display: inline-block;
      animation: typing .5s .9s both,topstart2 1.2s ease both 2s,topstart3 .5s ease both 2.4s;
    }
  .smart-view{
    padding-top:160px;
    padding-right:100px;
    animation:iphonefade cubic-bezier(0.68,-0.55,0.27,1.55) .7s both 4s;
  }
}

.topback::before{
  content:"";
  width:100%;
  height:100%;
  position:absolute;
  z-index:-1;
  top:0;
  left:0;
  animation:backfade ease 1.4s 3.6s both;
}
.typ-container::after{
  content:"";
  width:100%;
  height:2px;
  position:absolute;
  z-index:10;
  top:50%;
  left:0;
  background-color: rgb(172, 172, 172);
  animation:topend ease .8s both 2.6s;
}
.typ-container::before{
  content:"";
  width:100%;
  height:2px;
  position:absolute;
  z-index:11;
  top:50%;
  left:0;
  animation:topstart 1.2s ease both 1.9s ;
}
@keyframes topstart {
  0%{
    width:0;
    background-color: rgb(157, 157, 157);
    }
  50%{
    width:100%;
    background-color: rgb(255, 0, 0);
  }
  100%{
    transform: translateX(1500px);
    transform-origin: right;
  }
}
@keyframes topend {
  0%{
    transform:translateX(0)
    }
  100%{
    transform:translateX(2000px)
  }
}
@keyframes topstart2 {
  0%{
    color: rgb(157, 157, 157);
    }
  70%{
    color: rgb(255, 60, 0);
  }
  100%{
    color: rgb(245, 245, 245);
  }
}
@keyframes typing {
  0%{
    transform: translateX(-80px);
    opacity: 0;
    }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes navfade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes iphonefade {
  0%{
    opacity: 0;
    transform: translateX(300px)
  }
  100%{
    opacity: 1;
    transform:  translateX(0px)
  }
}
@keyframes backfade {
  0%{
    background-color: rgba(79, 79, 79, 0.95);
  }
  100%{
    background-color: rgba(69, 69, 69, 0.7);
  }
}
@keyframes topanime{
  0%{
    transform: translate(0);
  }
  80%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-360px);
  }
}
@keyframes topanime2{
  0%{
    opacity: 1;
    transform: translate(340px,100px) scale(1);
  }
  50%{
    opacity: 1;
    transform: translate(340px,100px) scale(1.4);
  }
  100%{
    opacity: 1;
  }
}
@keyframes topanime3{
  0%{
    opacity: 0;
    transform: translateY(50px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes topanime4{
  0%{
    opacity: 0;
    transform: translateX(-50px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes topanime5{
  0%{
    opacity: 0;
    transform: translateX(-200px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes topanime6{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.loadfade-leave-active{
  transition: all ease .6s;
}
.loadfade-enter-active {
    transition: all ease 1s;
    opacity: 0;
}
.loadfade-enter-to {
  opacity: 1;
}
.loadfade-leave-to {
    opacity: 0;
}
.fadeIn {
transition: 1s;
opacity: 0;
transform:translate3d(0,100px,0);
padding-bottom:100px;
}

.fadeIn.animated {
opacity: 1;
transform: translate3d(0, 0, 0);
}
@media screen and (max-width:1400px) {
  .topback{
  .typ {
      padding-bottom: 8px;
      display: block;
      color:rgba(255, 255, 255,0.9);
      width: 100%;
      font-size:40px;
      overflow:unset;
      white-space:unset;
      transform: translate3d(0,0,0);
      animation: none;
    }
  }
}
@media screen and (max-width:600px) {
  #nav{
      .selection{
          font-size:28px;
          margin-top:20px;
      }
  }
  .topback{
    .typ{
      font-size:40px;
      width:80%;
      text-align: left;
      }
    .smart-view img{
      width:200px;
      height:400px;
    }
  }
}
@media screen and (max-width:480px) {
  .topback{
    background-attachment:unset;
    height:100vh;
    .typ {
      padding-bottom: 0px;
      color:rgba(255, 255, 255, 0.9);
      font-size:30px;
      animation: none;
      width:100%;
      overflow: visible;
      white-space:unset;
      position:absolute;
      top:40vh;
      left:-66px;
    }
  }
  .topback::before{
  height:100%;
    }
  .topanime{
  width:100%;
  height:100%;
  background-color: black;
  animation:none;
  display: none;
  }
  .typ-container::after{
  top:46%;
  left:0;
}
.typ-container::before{
  top:46%;
  left:0;
}
}
</style>
