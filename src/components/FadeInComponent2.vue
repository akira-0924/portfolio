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
      if (top < window.innerHeight - 140) {
        this.visiblestyle.opacity = '1'
        this.visiblestyle.animation = 'topanime4 ease 1.2s both'
      }
    }
  }
}
</script>
