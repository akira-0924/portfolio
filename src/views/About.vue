<template>
  <div class="about-container">
      <subtitle title='Hobby'/>
    <scrollfade4>
      <p class="ho-title">中学1年生の頃にギターに出会い、高校では陸上部に所属しながらも、兼部で軽音楽部に入部。現在は趣味としてYoutubeに弾いてみた動画をアップロードしています。</p>
    </scrollfade4>
      <scrollfade>
        <div class="slider">
          <img :src="guitar1" class="you-img" width="500" height="340" alt="alt here..." />
          <img :src="guitar2" class="you-img" width="500" height="340" alt="alt here..." />
          <img :src="guitar3" class="you-img" width="500" height="340" alt="alt here..." />
        </div>
      </scrollfade>
      <scrollfade4>
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
        <br><a :href="url" class="my-youtube"><btn link="YouTube" /></a>
      </scrollfade4>
      <scrollfade>
        <contact/>
      </scrollfade>
  </div>
</template>
<script>
import contact from '../components/contact.vue'
import scrollfade from '../components/FadeInComponent.vue'
import scrollfade4 from '../components/FadeInComponent4.vue'
import subtitle from '../components/Subtitle.vue'
import btn from '../components/Btn.vue'

export default {
  name: 'App',
  components: {
    contact,
    scrollfade,
    scrollfade4,
    subtitle,
    btn
  },
  data () {
    return {
      guitarimg: require('../assets/guitar.jpg'),
      url: 'https://www.youtube.com/channel/UCDS_2MtKUP7h4vDS2tUVKIg',
      guitar1: require('../assets/guitar1.png'),
      guitar2: require('../assets/guitar2.png'),
      guitar3: require('../assets/guitar3.png')
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
  margin:0px 10px;
  scroll-snap-align: center;
}
.ho-title{
  width:70%;
  margin:0 auto;
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
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin:20px auto;
  position:relative;
  border-radius: 10px;
  box-shadow: 0px 3px 4px rgb(172, 172, 172);
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

@media screen and (max-width:480px) {
  .about-container{
  background-attachment:unset;
  }
  .you-img{
    width:320px;
    height:260px;
  }
  .slider{
  width:90%;
  }
}
</style>
