<template>
  <div class="port-container">
    <h1 class="detail-title">Product detail</h1>
    <div class="port-title">
      <scrollfade>
        <img :src="portfigma" class="rock-img1" width="900" height="600">
      </scrollfade>
    </div>
    <scrollfade4>
      <div class="dis-container">
        <h2>ポートフォリオ(このサイト)です</h2>
        <p>【使用言語・ツール】</p>
          <span class="discription">Figma / HTML5,CSS3 / Vue.js</span>
          <p>【制作期間】</p>
          <span class="discription">2021年 5月</span>
      </div>
    </scrollfade4>
    <scrollfade4>
      <a :href="git2" class="rockto">
        <btn link="gitHub" />
      </a>
      <a :href="figma2" class="rockto">
        <btn link="Figma" />
      </a>
    </scrollfade4>
    <retop/>
  </div>
</template>
<script>
import scrollfade from '../components/FadeInComponent.vue'
import scrollfade4 from '../components/FadeInComponent4.vue'
import btn from '../components/Btn.vue'
import retop from '../components/retop.vue'

export default {
  components: {
    scrollfade,
    scrollfade4,
    btn,
    retop
  },
  data () {
    return {
      portfigma: require('../assets/portfigma.png'),
      git2: 'https://github.com/akira-0924/Portfolio',
      figma2: 'https://www.figma.com/file/b0YonIpDIKuSJrgbFwSxU7/My-Figma?node-id=202%3A2'
    }
  }
}
</script>

<style scoped>
.port-container{
  width:100%;
  height: 100%;
  position: relative;
  z-index:1;
  background-image: url('../assets/back2.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat:no-repeat;
}
.detail-title{
  padding-top:20px;
  font-size:40px;
}
.port-container::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.dis-container{
  width:70%;
  margin:40px auto;
  text-align: left;
  font-size: 22px;
}
.discription{
  display: inline-block;
  margin-left:10px;
  text-align: left;
  width:70%;
  line-height: 36px;
}
.rock-img1{
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(133, 133, 133);
  margin-top:40px;
  border:10px solid rgb(186, 186, 186);
}
.rockto{
  text-decoration: none;
  color:rgb(50, 50, 50);
}
</style>
