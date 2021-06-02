<template>
  <div class="rock-container">
    <h1 class="detail-title">Product detail</h1>
    <div class="img-con">
      <img :src="rocktitle" class="rock-img1" width="600" height="360">
      <scrollfade2>
        <br><span class="title">IntRock</span><span class="subtitle">あなたに合ったロックバンドを。</span>
      </scrollfade2>
      <scrollfade4>
        <div class="dis-container">
        <p>【使用言語・ツール】</p>
          <span class="discription">Figma / HTML5,CSS3 / JavaScript(jQuery) / Ruby on Rails</span>
          <p>【制作期間】</p>
          <span class="discription">2021年 2月~5月</span>
        </div>
        <a :href="rockto" class="rockto">
          <btn link="実際のプロダクト" />
        </a>
      </scrollfade4>
      <scrollfade4>
        <h1 class="second-titie">ロックの良さをもっと知って欲しい...<br>診断形式のロックバンド紹介サービス</h1>
          <p class="dis-items">GeekSalon web開発コースにて3ヶ月で制作しました。企画、デザイン、コーディングまで一貫してオリジナルで開発しました。</p>
      </scrollfade4>
        <scrollfade>
          <img :src="rock2" class="rock-img2" width="800" height="460">
        </scrollfade>
      <scrollfade4>
      <h1 class="third-titie"><i class="fas fa-check"></i>制作の背景</h1>
        <span class="discription">音楽鑑賞(ロック)が趣味である僕が、友人のロックバンドを勧めると聴いてはくれるものの、いまいち共感されない...なんてことが多々ありました。そこでその人の好きな音楽の傾向を掴み、その人にあったロックバンドを紹介することで好きになってくれるのではないか、と考えました。
  このサービスはロックにあまり関心がない人、好きではない人に向けてその人にあったロックバンドを紹介するサービスです。</span></scrollfade4>
      <div class="third-block">
        <h1 class="third-titie"><i class="fas fa-check"></i>ポイント</h1>
        <div class="third-block" v-for="subtitle in subtitles" v-bind:key="subtitle.id">
          <scrollfade2>
            <h3 class="third-subu">{{ subtitle.title }}</h3>
          </scrollfade2>
          <scrollfade>
            <p class="third-dis">{{ subtitle.disc }}</p>
          </scrollfade>
        </div>
      </div>
      <scrollfade4>
        <div class="btn-field">
          <a :href="rockto" class="rockto">
            <btn link="Pruduct" />
          </a>
          <a :href="git1" class="rockto">
            <btn link="gitHub" />
          </a>
          <a :href="figma1" class="rockto">
            <btn link="Figma" />
          </a>
        </div>
      </scrollfade4>
    </div>
  </div>
</template>
<script>
import scrollfade from '../components/FadeInComponent.vue'
import scrollfade2 from '../components/FadeInComponent2.vue'
import scrollfade4 from '../components/FadeInComponent4.vue'
import btn from '../components/Btn.vue'

export default {
  components: {
    scrollfade,
    scrollfade2,
    scrollfade4,
    btn
  },
  data () {
    return {
      rocktitle: require('../assets/rock1.png'),
      rock2: require('../assets/rock2.png'),
      rockto: 'https://rockintroduction.herokuapp.com',
      git1: 'https://github.com/akira-0924/Original',
      figma1: 'https://www.figma.com/file/b0YonIpDIKuSJrgbFwSxU7/My-Figma?node-id=0%3A1',

      subtitles: [
        { id: 1, title: '1.モダンなデザイン', disc: 'CSSのアニメーション、jQueryを用いてモダンなデザインを施しました。' },
        { id: 2, title: '2.Ajax処理', disc: '投稿に対するいいね機能、削除機能、画像投稿、ユーザーアイコンの変更に関しては非同期通信で行えます。' },
        { id: 3, title: '3.レスポンシブ対応', disc: 'スマホでもご覧いただけます。' },
        { id: 4, title: '4.読み込み速度の向上', disc: 'Pagespeed Insightの結果は“<span>70~76</span>”になっています。主に、画像ファイルの圧縮、YouTubeの埋込動画のサムネイル化、フォントの非同期読み込み、CSS、JSの書き方の工夫を行い読み込み速度を向上させました。' }
      ]
    }
  },
  methods: {
    btnon () {
      this.imgif = false
    },
    btnoff () {
      this.imgif = true
    }
  }
}
</script>

<style scoped>
.rock-container{
  width:100%;
  height: 100%;
}
.detail-title{
  padding-top:20px;
  font-size:40px;
}
.img-con{
  height:100%;
  position: relative;
  z-index:1;
  background-image: url('../assets/back2.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat:no-repeat;
  padding-bottom: 100px;
}
.img-con::before{
  content:'';
  width:100%;
  height: 100%;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.6);
}
.rock-img1{
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(133, 133, 133);
  margin-top:40px;
  border:10px solid rgb(186, 186, 186);
}
.rock-img2{
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(133, 133, 133);
  border:2px solid rgb(174, 174, 174);
}
.title{
  width: 70%;
  display: block;
  margin:0 auto;
  font-size:54px;
  font-weight: bold;
  text-align: left;
  padding-top:60px;
}
.subtitle{
  font-weight:bold;
  width: 70%;
  display: block;
  margin:0 auto;
  text-align: left;
}

.dis-container{
  width:70%;
  margin:40px auto;
  text-align: left;
  font-size: 22px;
}
.dis-items{
  width: 70%;
  margin:10px auto;
  text-align: left;
}
.discription{
  display: inline-block;
  margin-left:10px;
  text-align: left;
  width:70%;
  line-height: 36px;
}
.second-titie{
  width:70%;
  margin:20px auto;
  text-align: left;
  padding-top:50px;
}
.third-titie{
  width:70%;
  margin:20px auto;
  text-align: left;
  padding-top:50px;
}
.third-subu{
  width:70%;
  margin:10px auto;
  text-align:left;
}
.third-dis{
width:70%;
margin:0 auto 30px;
padding-left:36px;
text-align:left;
line-height: 36px;
}
.third-dis span{
  border-bottom:1px solid black;
  font-weight: bold;
}

.fa-check{
  margin-right:10px;
color:rgb(77, 77, 77);
}
@media screen and (max-width:900px) {
  .rock-img2{
    width:86%;
    height:80%;
  }
}
@media screen and (max-width:700px) {
  .rock-img1{
    width:86%;
    height:90%;
  }
}
.rockto{
  text-decoration: none;
  color:rgb(50, 50, 50);
}
</style>
