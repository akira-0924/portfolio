<template>
  <div class="pro-wrapper">
    <h1 class="pro-title">My Production</h1>
    <div class="pro-container">
      <div class="pro-item">
        <router-link to="/Product-item1">
          <div class="imgchange">
            <transition name="imgFade">
                <div v-if="imgif" class="imgif">
                  <img v-on:mouseover="imghover" v-on:mouseleave="imgrehover" :src="prorock" width="400" height="300">
                </div>
                <div v-else class="imgif">
                  <img v-on:mouseover="imghover" v-on:mouseleave="imgrehover" :src="prorock2" width="400" height="300">
                </div>
            </transition>
          </div>
        </router-link>
        <router-link to="/Product-item1"><h3>ロック診断サイト</h3></router-link>
      </div>
      <div class="pro-item">
        <router-link to="/Product-item2">
          <div class="imgchange">
            <transition name="imgFade">
              <div v-if="img2if" class="imgif">
                <img v-on:mouseover="img2hover" v-on:mouseleave="img2rehover" :src="protop" width="400" height="300">
              </div>
              <div v-else class="imgif">
                <img v-on:mouseover="img2hover" v-on:mouseleave="img2rehover" :src="protop2" width="400" height="300">
              </div>
            </transition>
          </div>
        </router-link>
        <router-link to="/Product-item2"><h3>ポートフォリオ</h3></router-link>
      </div>
      <div class="pro-item">
        <router-link to="/Product-item3">
          <div class="imgchange">
            <transition name="imgFade">
              <div v-if="img3if" class="imgif">
                <img v-on:mouseover="img3hover" v-on:mouseleave="img3rehover" :src="proline" width="400" height="300">
              </div>
              <div v-else class="imgif">
                <img v-on:mouseover="img3hover" v-on:mouseleave="img3rehover" :src="proline2" width="400" height="300">
              </div>
            </transition>
          </div>
        </router-link>
        <router-link to="/Product-item3"><h3>LINE BOT</h3></router-link>
      </div>
    </div>
    <imaging/>
  </div>
</template>
<script>
import imaging from '../components/imaging.vue'

export default {
  components: {
    imaging
  },
  data () {
    return {
      prorock: require('../assets/rock.png'),
      prorock2: require('../assets/change_rock.png'),
      protop: require('../assets/top.png'),
      protop2: require('../assets/protop2.jpg'),
      proline: require('../assets/line.jpg'),
      proline2: require('../assets/linebot2.jpg'),
      imgif: true,
      img2if: true,
      img3if: true
    }
  },
  methods: {
    imghover () {
      this.imgif = false
    },
    imgrehover () {
      this.imgif = true
    },
    img2hover () {
      this.img2if = false
    },
    img2rehover () {
      this.img2if = true
    },
    img3hover () {
      this.img3if = false
    },
    img3rehover () {
      this.img3if = true
    }
  }
}
</script>

<style scoped>
.pro-wrapper{
  width:100%;
  height: 100%;
  background-color: rgb(255, 251, 245);
  background-image: url('../assets/back2.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat:no-repeat;
  position: relative;
  z-index: 1;
}
.pro-wrapper::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.pro-title{
  display: inline-block;
  border-bottom:2px solid black;
  margin:30px 80px;
  font-size:40px;
  padding-top:60px;
  letter-spacing: 4px;
}
.pro-container{
  width:100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin:0 auto;
  padding:60px 0;
}
.pro-item {
    width:auto;
    height: 100%;
}
.pro-item img {
    border:1px solid rgb(131, 131, 131);
    border-radius: 10px;
    box-shadow: 0px 4px 3px rgb(96, 96, 96);
}
.pro-item h3 {
  font-size: 20px;
  text-decoration: none;
}
.pro-item a{
  text-decoration: none;
  color:rgb(70, 70, 70);
}
.imgchange{
  position: relative;
  width:400px;
  height:300px;
  margin:20px 8px;
}
.imgif{
  position:absolute;
}
.imgFade-leave-active{
  transition: all cubic-bezier(0.170, 0.935, 0.305, 1.000) .7s;
}
.imgFade-enter-active {
    transition: all cubic-bezier(0.170, 0.935, 0.305, 1.000) .7s;
    opacity: 0;
    transform:scale(0.97)
}
.imgFade-enter-to {
  opacity: 1;
  transform:scale(1.0);
}
.imgFade-leave-to {
    opacity: 0;
}

@media screen and (max-width:480px) {
  .pro-wrapper{
    background-attachment:unset;
  }
  .pro-item{
    width:100%;
  }
  .pro-item img {
    width:340px;
    height: 260px;
  }
  .imgchange{
  position: relative;
  width:340px;
  height:260px;
  margin:20px auto;
}
  .pro-title{
  display: inline-block;
  border-bottom:2px solid black;
  margin:10px 0px;
  font-size:30px;
  padding-top:60px;
  letter-spacing: 4px;
}
}
</style>
