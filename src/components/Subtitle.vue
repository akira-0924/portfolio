<template>
  <h1 class="pro-title">{{ title }}</h1>
</template>

<script>

export default {
  name: 'Subtitle',
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style scoped>
.pro-title{
  display: inline-block;
  border-bottom:2px solid black;
  margin:30px 80px;
  font-size:40px;
  padding-top:60px;
  letter-spacing: 4px;
}
</style>
