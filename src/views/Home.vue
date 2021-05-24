<template>
  <div class="profile-container">
    <div class="pro-items">
      <img :src="hoprofile" class="pro-img" width="260" height="260">
      <h1>水島 アキラ</h1>
      <h3>日本大学/理工学部/電気工学科</h3>
    </div>
    <div class="pro-items2">
      <p>日本大学理工学部電気工学科4年。中学、高校は6年間陸上部長距離に所属。大学では電気・電力・電子・情報通信など幅広く学修しました。研究室では高校数学における“確率”の教育促進のために変形サイコロ(サイドタ)を用いたシミュレーションを行っています。<br>大学の講義、研究でJava,Cの基本を学修しプログラミングの面白さを実感。その後progateでHTML/CSSの基礎を学修し、2021年2月にプログラミングスクール(GeekSaon)に入校。web開発コース39期生として、ロックバンドの診断サイトを制作し、優勝いたしました。<br>現在はフロントエンドの開発に興味を持ち、Vue.js、Reactを学修しています。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      hoprofile: require('../assets/profile.png')
    }
  }
}
</script>
<style scoped>
.home{
  text-shadow:2px 2px 4px rgb(114, 114, 114);
  color:rgb(13, 0, 255);
  background-color: antiquewhite;
  height:220px;
}
.profile-container{
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
background-image: url('../assets/back2.jpg');
background-size: cover;
background-attachment: fixed;
background-repeat:no-repeat;
position: relative;
z-index:1;
padding-bottom:60px;
}
.profile-container::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.pro-items{
width: auto;
height: 100%;
}
.pro-items2{
width: 34%;
height: 100%;
margin:100px 60px 40px 60px;
line-height: 36px;
}
.pro-img{
border-radius: 50%;
margin-top:80px;
}
@media screen and (max-width:900px) {
  .pro-items2{
    width:90%;
    margin:20px 0px 0px 0px;
  }
}
</style>
