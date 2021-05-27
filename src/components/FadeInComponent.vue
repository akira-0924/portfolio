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
        opacity: '',
        transition: 'all ease 1.4s',
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
        this.visiblestyle.animation = 'topanime3 cubic-bezier(0.86,0,0.07,1) 1.4s both'
      } else {
        this.visiblestyle.opacity = '0'
        this.visiblestyle.animation = 'topanime4 ease 1.4s both'
      }
    }
  }
}
</script>

<style scoped>
@keyframes vihi{
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(100px);
  }
}
.allfade-enter {
  opacity: 1;
}

.allfade-enter-active,
.allfade-leave-active {
  transition: all 2s;
  transform: translateY(180px)
}

.allfade-enter-to {
  opacity: 1;
  transform: translateY(0px)
}

.allfade-leave-to {
  opacity: 1;
  transition:all 2s;
}
</style>
