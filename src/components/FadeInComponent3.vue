<template>
    <div :style='visiblestyle' class="ssss">
      <slot></slot>
    </div>
</template>
<script>
export default {
  data () {
    return {
      visiblestyle: {
        opacity: '0',
        transition: '',
        animation: ''
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroied () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
      var top = this.$el.getBoundingClientRect().top
      console.log(window.innerHeight + 100 + '　innerHeight+100')
      console.log(top + '　top')
      console.log(this.scrollY + '　scrollY')
      console.log('')
      if (top < window.innerHeight - 140) {
        this.visiblestyle.opacity = '1'
        this.visiblestyle.animation = 'topanime5 cubic-bezier(0.86,0,0.07,1) 1.4s both'
      }
    }
  }
}
</script>
