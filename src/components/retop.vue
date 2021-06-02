<template>
  <div class="re-container">
    <div class="retop" v-on:click="reclick">
    <i class="fas fa-angle-double-up fa-2x"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      aaa: 'bbb'
    }
  },
  methods: {
    reclick () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style scoped>
.re-container{
  width:100%;
  padding-bottom:20px;
}
.retop{
  width:60px;
  height:60px;
  border-radius: 50%;
  background-color: rgba(106, 106, 106, 0.5);
  margin:100px 20px 0 auto;
  cursor: pointer;
}
.fa-angle-double-up{
  color:rgba(255, 255, 255,0.95);
  margin-top:14px;
  animation:retop ease 2s both infinite;
}
.retop:hover{
  background-color: rgb(72, 72, 72);
  transition:all ease .5s ;
}
@keyframes retop {
  0%{
    transform: translateY(3px);
  }
  50%{
    transform: translateY(-3px);
  }
  100%{
    transform: translateY(3px);
  }
}
</style>
