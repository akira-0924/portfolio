<template>
  <div class="about-container">
    <h1 class="ex-title">Hobby</h1>
    <p class="ho-title">中学1年生の頃にギターに出会い、高校では陸上部に所属しながらも、兼部で軽音楽部に入部。現在は趣味としてYoutubeに弾いてみた動画をアップロードしています。</p>
      <div class="slider">
        <img src="http://img.youtube.com/vi/29Ai79iwd9g/mqdefault.jpg" class="you-img" width="500" height="340" alt="alt here..." />
        <img src="http://img.youtube.com/vi/29Ai79iwd9g/mqdefault.jpg" class="you-img" width="500" height="340" alt="alt here..." />
        <img src="http://img.youtube.com/vi/29Ai79iwd9g/mqdefault.jpg" class="you-img" width="500" height="340" alt="alt here..." />
      </div>
      <div class="you-item">
        <div class="you-items">
          <p>【機材】</p>
          behringer/U-PHORIA<br>
          ZOOM G3 Version 2.0
        </div>
        <div class="you-items">
          <p>【編集ツール】</p>
          iMovie,GarageBand
        </div>
      </div>
      <br><h2 class="ab-btn"><a :href="url" class="my-youtube">YouTube<i class="fas fa-angle-right"></i></a></h2>
    <contact/>
  </div>
</template>
<script>
import contact from '../components/contact.vue'

export default {
  name: 'App',
  components: {
    contact
  },
  data () {
    return {
      guitarimg: require('../assets/guitar.jpg'),
      url: 'https://www.youtube.com/channel/UCDS_2MtKUP7h4vDS2tUVKIg'
    }
  }
}
</script>

<style scoped>
.about-container{
width:100%;
height:100%;
background-color: rgb(255, 251, 245);
background-image: url('../assets/back2.jpg');
background-size: cover;
background-attachment: fixed;
background-repeat:no-repeat;
position: relative;
  z-index: 1;
}
.about-container::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.you-img{
  border-radius: 10px;
  margin:10px 0;
  box-shadow: 0px 3px 4px rgb(172, 172, 172);
}
.ho-title{
  width:70%;
  margin:0 auto;
}
.ab-btn{
  display: inline-block;
  background-color: rgb(255, 224, 172);
  padding:6px 10px 6px 20px;
  font-size:34px;
  border-radius: 20px;
  box-shadow: 0px 3px 4px rgb(172, 172, 172);
  margin:20px 0;
  cursor: pointer;
  transition:all ease .3s;
}
.ab-btn:hover{
  letter-spacing: 2px;
  background-color: rgb(255, 211, 136);
}
.fa-angle-right{
margin-left:16px;
}
.my-youtube{
  text-decoration: none;
  color:rgb(75, 75, 75);
}
.you-item{
  width:100%;
  height:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.you-items{
  margin:0 30px;
  font-size:24px;
}
.you-items p{
  font-weight: bold;
}
.slider{
  width:500px;
  white-space: nowrap;
  overflow:hidden;
  margin:0 auto;
  position:relative;
}
.slider::before{
  content:'';
  width:50px;
  height: 50px;
  background-color: rgb(167, 167, 167) ;
  border-radius: 50%;
  position: absolute;
  left:10px;
  top:42%;
  z-index:1;
  cursor: pointer;
}
.slider:active .you-img{
  transform: translateX(-100px);
}
.hooper-slide {
    background-color: #62caaa;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 2px solid #fff;
    font-size: 30px;
    border-radius: 10px;
  }
@media screen and (max-width:600px) {
  .you-img{
    width:400px;
    height:300px;
  }
}
</style>
