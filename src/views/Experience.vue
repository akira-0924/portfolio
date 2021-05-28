<template>
  <div class="Experience">
    <h1 class="ex-title">University</h1>
    <div class="ex-container">
      <div class="ex-items">
        <scrollfade>
          <img :src="eximguni" width="420" height="310">
        </scrollfade>
      </div>
      <div class="ex-items-dis">
        <scrollfade4>
          <h2>日本大学/理工学部/電気工学科</h2>
          <p><span class="uni-tema">【講義】</span><br>電気工学科に所属し、電力、半導体、電気・電子回路、情報工学、コンピュータシミュレーションなどを履修しました。</p>
          <p><span class="uni-tema">【研究】</span><br>星野研究室に所属しています。研究テーマは、“<span class="kenkyu">変形サイコロ(サイドタ)の解析</span>”です。数学における確率の学習を、より分かりやすく、正しく理解してもらうために変形サイコロを用いたシミュレーションによる解析を行っています。</p>
        </scrollfade4>
      </div>
    </div>
    <scrollfade4>
      <h2 class="ex-title">Programming</h2>
      <p class="ex-pro">知識、技術0の状態からprogateでHTML/CSSをやり込む。その後、GeekSalon(プログラミングスクール)にweb39期生として入校し、ロック診断サイトを制作。見事最終発表で優勝いたしました。</p>
    </scrollfade4>
    <scrollfade2>
      <h2 class="skills-title"><i class="fas fa-caret-right"></i>フロントエンド</h2>
    </scrollfade2>
      <div class="skills">
        <ul>
          <scrollfade>
            <li class="pro-list mou" v-for="skill in skills1" v-bind:key="skill.id">{{ skill.skill }}</li>
            <li class="pro-list mada">React<span>(学修中)</span></li>
          </scrollfade>
        </ul>
      </div>
      <scrollfade2>
        <h2 class="skills-title"><i class="fas fa-caret-right"></i>バックエンド</h2>
      </scrollfade2>
      <div class="skills">
        <ul>
          <scrollfade>
            <li class="pro-list mou">Rails</li>
          </scrollfade>
        </ul>
      </div>
      <scrollfade2>
        <h2 class="skills-title"><i class="fas fa-caret-right"></i>インフラ・サーバー</h2>
      </scrollfade2>
      <div class="skills">
        <ul>
          <scrollfade>
            <li class="pro-list mada">AWS<span>(学修予定)</span></li>
            <li class="pro-list mada">Docker<span>(学修中)</span></li>
          </scrollfade>
        </ul>
      </div>
      <scrollfade2>
        <h2 class="skills-title"><i class="fas fa-caret-right"></i>データベース</h2>
      </scrollfade2>
      <div class="skills">
        <ul>
          <scrollfade>
            <li class="pro-list mou">SQLite3</li>
            <li class="pro-list mada">MySQL<span>(学修予定)</span></li>
          </scrollfade>
        </ul>
      </div>
      <scrollfade2>
        <h2 class="skills-title"><i class="fas fa-caret-right"></i>その他</h2>
      </scrollfade2>
      <div class="skills">
        <ul>
          <scrollfade>
            <li class="pro-list mou" v-for="skill in skills2" v-bind:key="skill.id">{{ skill.skill }}</li>
          </scrollfade>
        </ul>
      </div>
      <scrollfade4>
        <router-link to="/Product">
          <h2 class="btn" v-on:mouseover="btnhover" v-on:mouseleave="btnrehover">Product<i class="fas fa-angle-right"></i></h2>
        </router-link>
      </scrollfade4>
  </div>
</template>
<script>
import scrollfade from '../components/FadeInComponent.vue'
import scrollfade2 from '../components/FadeInComponent2.vue'
import scrollfade4 from '../components/FadeInComponent4.vue'

export default {
  name: 'HelloWorld',
  components: {
    scrollfade,
    scrollfade2,
    scrollfade4
  },
  data () {
    return {
      skills1: [
        { id: 1, skill: 'HTML5' },
        { id: 2, skill: 'CSS3' },
        { id: 3, skill: 'jQuery' },
        { id: 4, skill: 'Vue.js' }
      ],
      skills2: [
        { id: 1, skill: 'Java' },
        { id: 2, skill: 'C' },
        { id: 3, skill: 'Unity' },
        { id: 4, skill: 'Slack' },
        { id: 5, skill: 'git' },
        { id: 6, skill: 'Figma' }
      ],
      eximguni: require('../assets/uni.png')
    }
  }
}
</script>

<style scoped>
.Experience{
  width:100%;
  height:100%;
  background-image: url('../assets/back2.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat:no-repeat;
  position: relative;
  z-index:1;
}
.Experience::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.ex-title{
  display: inline-block;
  border-bottom:2px solid black;
  margin:30px 80px;
  font-size:40px;
  padding-top:60px;
  letter-spacing: 4px;
}

.ex-items img{
  border-radius: 10px;
  margin:20px 40px  ;
}
.ex-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.ex-items-dis{
  width:40%;
  line-height: 36px;
  margin-top:40px;
}
.uni-tema{
  font-size:20px;
  font-weight: bold;
}
.kenkyu{
  border-bottom:1px solid black;
  font-weight: 500;
}
.ex-pro{
  width:60%;
  margin: 0 auto;
  line-height: 36px;
}
.skills-title{
  width:60%;
  margin:30px auto 0px;
  text-align: left;
}
.skills{
  display: flex;
  justify-content:flex-start;
flex-wrap: wrap;
  width:68%;
  margin:0 auto;
}
.pro-list{
  display: inline-block;
  font-size:30px;
  font-weight: 700;
  margin:4px 20px;
  padding:4px 10px;
  border-radius: 10px;
  min-width:80px;
}
.pro-list span{
  font-size:24px;
}
.mou{
  background-color: rgb(212, 255, 0);
}
.mada{
  background-color: rgb(238, 238, 238);
}
.btn{
  display: inline-block;
  background-color: rgb(255, 224, 172);
  padding:6px 10px 6px 20px;
  font-size:34px;
  border-radius: 20px;
  box-shadow: 0px 3px 4px rgb(172, 172, 172);
  margin:80px 0;
  cursor: pointer;
  color:black;
  transition:all ease .3s;
}
.btn:hover{
  letter-spacing: 2px;
  background-color: rgb(255, 211, 136);
}
.fa-angle-right{
margin-left:16px;
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

@media screen and (max-width:600px) {
  .ex-items-dis{
  width:80%;
  }
 .skills{
  width:90%;
justify-content:center;
  }
}

@media screen and (max-width:480px) {
  .Experience{
  background-attachment:unset;
  }
  .ex-items img{
    width:340px;
    height: 260px;
    margin:20px auto;
  }
  .ex-items-dis{
    width:90%;
  }
  .ex-title{
  margin:30px auto;
  font-size:40px;
  padding-top:60px;
}
  .skills-title{
  width:80%;
  margin:30px auto 0px;
  text-align: left;
  }
  .pro-list{
  font-size:30px;
  margin:4px 10px;
  padding:4px 10px;
  min-width:100px;
  }
  .skills{
  margin-right: 40px;
  }
}
</style>
