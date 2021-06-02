<template>
  <div class="btn">
    {{ link }}<i class="fas fa-angle-right"></i>
  </div>
</template>

<script>

export default {
  name: 'Subtitle',
  props: {
    link: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
