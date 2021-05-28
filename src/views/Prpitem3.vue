<template>
  <div class="line-container">
    <h1 class="detail-title">Product detail</h1>
      <div class="line-items">
        <div class="line-item">
          <scrollfade>
            <img :src="talk" class="talkimg" width="360" height="700">
          </scrollfade>
        </div>
        <div class="line-item">
          <scrollfade4>
            <h1>LINE BOT</h1>
            <p>LINE Messaging API を用いた対話型LINEチャットボットです</p>
          </scrollfade4>
          <scrollfade>
            <img :src="botqr" width="200" height="200">
          </scrollfade>
          <scrollfade4>
            <p class="line-title">【使用言語・ツール】</p>
            <span class="line-discription">Google App Script</span>
            <p class="line-title">【制作期間】</p>
            <span class="line-discription">2020年 11月</span>
          </scrollfade4>
          <scrollfade>
            <a :href="git" class="rockto">
              <div class="btn">
                gitHub<i class="fas fa-angle-right"></i>
              </div>
            </a>
          </scrollfade>
        </div>
      </div>
  </div>
</template>
<script>
import scrollfade from '../components/FadeInComponent.vue'
import scrollfade4 from '../components/FadeInComponent4.vue'

export default {
  components: {
    scrollfade,
    scrollfade4
  },
  data () {
    return {
      talk: require('../assets/LINEtalk.jpg'),
      botqr: require('../assets/botqr.png'),
      git: 'https://github.com/akira-0924/LINEbot/blob/main/LINEbot'
    }
  }
}
</script>

<style lang="scss">
.detail-title{
  padding-top:20px;
  font-size:40px;
}
.line-items{
  display: flex;
  width:90%;
  margin:20px auto;
  justify-content: center;
  flex-wrap: wrap;
  padding:60px 0px;

  .line-item{
    margin:0px 10px;

    h1{
      font-size:40px;
    }
    .talkimg{
      border:1px solid rgb(162, 162, 162);
    }

    .rockto{
      text-decoration: none;
      color:rgb(50, 50, 50);

      .btn{
        display: inline-block;
        background-color: rgb(255, 224, 172);
        padding:6px 10px 6px 20px;
        font-size:30px;
        border-radius: 20px;
        box-shadow: 0px 3px 4px rgb(172, 172, 172);
        margin:10px 20px 10px 20px;
        cursor: pointer;
        transition:all ease .3s;

        .fa-angle-right{
        margin-left:16px;
        }
      }
      .btn:hover{
        letter-spacing: 2px;
        background-color: rgb(254, 202, 112);
      }
    }
  }
  .line-title{
    font-size:24px;
  }
  .line-discription{
    display: inline-block;
    font-size:20px;
    margin-bottom:20px;
  }
}
</style>
